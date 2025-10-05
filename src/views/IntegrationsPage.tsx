import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  checkShopifyConnection,
  isAuthenticated,
  shopifyController,
} from "../api/services/articraft";
import { isAxiosError } from "axios";
import { colors } from "../styles";
import axios from "axios";

interface Integration {
  id: string;
  name: string;
  description: string;
  connected: boolean;
  logo?: string;
}

export const IntegrationsPage = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "shopify",
      name: "Shopify",
      description:
        "Connect your Shopify store to track sales, orders, and customer data.",
      connected: false,
      logo: "🛍️",
    },
    {
      id: "meta",
      name: "Meta",
      description:
        "Monitor Facebook and Instagram ad campaigns, manage budgets, and improve targeting.",
      connected: false,
      logo: "📘",
    },
    {
      id: "google-ads",
      name: "Google Ads",
      description:
        "Access detailed performance metrics to optimize ad spend and track conversions.",
      connected: false,
      logo: "🔺",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [shopDomain, setShopDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check integrations dynamically from /api/user/me
  useEffect(() => {
    const fetchUserIntegrations = async () => {
      if (!isAuthenticated()) {
        console.log("User not authenticated, skipping connection check");
        return;
      }

      try {
        const token = localStorage.getItem("looptrack_access_token");
        const { data } = await axios.get(
          "https://api.articraft.io/api/user/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // Update integration state based on API response
        setIntegrations((prev) =>
          prev.map((integration) => {
            if (integration.id === "shopify") {
              return { ...integration, connected: data.shopifyConnected };
            }
            if (integration.id === "meta") {
              return { ...integration, connected: data.metaConnected };
            }
            return integration; // keep Google Ads unchanged for now
          })
        );
      } catch (err) {
        console.error("Failed to fetch /api/user/me", err);
      }
    };

    fetchUserIntegrations();
  }, []);

  const handleShopifyConnect = async () => {
    if (!shopDomain.trim()) {
      setError("Please enter your shop domain");
      return;
    }

    // Check authentication before connecting
    if (!isAuthenticated()) {
      setError("Please log in first to connect integrations");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data } = await shopifyController.auth(shopDomain);
      window.location.href = data.link;

      setOpenModal(false);
      setShopDomain("");
    } catch (err: any) {
      if (isAxiosError(err)) {
        console.log(err.request?.headers);
      }
      setError(
        err.message || "Failed to connect to Shopify. Please check your domain."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = (integrationId: string) => {
    // Check authentication first
    if (!isAuthenticated()) {
      alert("Please log in first to connect integrations");
      return;
    }

    if (integrationId === "shopify") {
      setOpenModal(true);
    } else {
      alert(`${integrationId} integration coming soon!`);
    }
  };

  const getStatusChip = (integration: Integration) => {
    if (integration.connected) {
      return (
        <Chip
          label="Connected"
          size="small"
          sx={{
            backgroundColor: "#e8f5e8",
            color: "#2e7d32",
            fontWeight: 500,
            fontSize: "12px",
            height: "24px",
            "& .MuiChip-label": {
              px: 1.5,
            },
          }}
        />
      );
    } else {
      return (
        <Chip
          label="Not Connected"
          size="small"
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#666",
            fontWeight: 500,
            fontSize: "12px",
            height: "24px",
            "& .MuiChip-label": {
              px: 1.5,
            },
          }}
        />
      );
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Authentication Warning */}
      {!isAuthenticated() && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="body2">
            Please log in to your account to connect integrations.
          </Typography>
        </Alert>
      )}

      {/* Integration Cards - Using CSS Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 2,
          maxWidth: "1200px",
        }}
      >
        {integrations.map((integration) => (
          <Card
            key={integration.id}
            sx={{
              height: 200,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              opacity: !isAuthenticated() ? 0.6 : 1,
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                transform: "translateY(-1px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <CardContent
              sx={{
                padding: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header with logo and status */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Typography variant="h4" sx={{ fontSize: "24px" }}>
                    {integration.logo}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#333",
                    }}
                  >
                    {integration.name}
                  </Typography>
                </Box>
                {getStatusChip(integration)}
              </Box>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 3,
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "#666",
                }}
              >
                {integration.description}
              </Typography>

              {/* Action Section */}
              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {!integration.connected && (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleConnect(integration.id)}
                    disabled={!isAuthenticated()}
                    sx={{
                      backgroundColor: colors.blue500,
                      color: "white",
                      fontSize: "14px",
                      fontWeight: 500,
                      textTransform: "none",
                      padding: "6px 16px",
                      borderRadius: "6px",
                      "&:disabled": {
                        backgroundColor: "#ccc",
                        color: "#666",
                      },
                    }}
                  >
                    Connect now
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Shopify Connection Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
            padding: "8px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#333",
            pb: 2,
          }}
        >
          Connect to Shopify
        </DialogTitle>
        <DialogContent sx={{ pb: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 3,
              p: 2,
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h4" sx={{ fontSize: "32px" }}>
              🛍️
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Shopify Store Integration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Connect your store to sync products, orders, and customer data
              </Typography>
            </Box>
          </Box>

          <TextField
            fullWidth
            label="Shop Domain"
            placeholder="your-shop-name"
            value={shopDomain}
            onChange={(e) => setShopDomain(e.target.value)}
            error={!!error}
            helperText={
              error || "Enter your shop name (without .myshopify.com)"
            }
            sx={{
              mt: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
            InputProps={{
              endAdornment: (
                <Typography
                  variant="body2"
                  sx={{ color: "#666", whiteSpace: "nowrap" }}
                >
                  .myshopify.com
                </Typography>
              ),
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            onClick={() => setOpenModal(false)}
            sx={{
              color: "#666",
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleShopifyConnect}
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={16} /> : null}
            sx={{
              backgroundColor: colors.blue500,
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              px: 3,
              py: 1,
              borderRadius: "8px",
            }}
          >
            {loading ? "Connecting..." : "Connect Store"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
