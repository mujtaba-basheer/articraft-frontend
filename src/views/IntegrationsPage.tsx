import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import { connectShopify, checkShopifyConnection, isAuthenticated } from "../api/services/articraft";

interface Integration {
  id: string;
  name: string;
  description: string;
  connected: boolean;
}

export const IntegrationsPage = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "shopify",
      name: "Shopify",
      description: "Connect your Shopify store to track sales, orders, and customer data.",
      connected: false,
    },
    {
      id: "meta",
      name: "Meta",
      description: "Monitor Facebook and Instagram ad campaigns, manage budgets, and improve targeting.",
      connected: false,
    },
    {
      id: "google-ads",
      name: "Google Ads",
      description: "Access detailed performance metrics to optimize ad spend and track conversions.",
      connected: false,
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [shopDomain, setShopDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check Shopify connection on load (only if authenticated)
  useEffect(() => {
    const checkConnection = async () => {
      // Only check connection if user is authenticated
      if (!isAuthenticated()) {
        console.log('User not authenticated, skipping connection check');
        return;
      }

      const isConnected = await checkShopifyConnection();
      setIntegrations(prev =>
        prev.map(integration =>
          integration.id === "shopify"
            ? { ...integration, connected: isConnected }
            : integration
        )
      );
    };
    checkConnection();
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
      await connectShopify(shopDomain);
      
      // Update connection status
      setIntegrations(prev =>
        prev.map(integration =>
          integration.id === "shopify"
            ? { ...integration, connected: true }
            : integration
        )
      );
      
      setOpenModal(false);
      setShopDomain("");
    } catch (err: any) {
      setError(err.message || "Failed to connect to Shopify. Please check your domain.");
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

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Integrations
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Connect your platforms to get unified insights and automate your campaigns.
        </Typography>
      </Box>

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
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        {integrations.map((integration) => (
          <Card
            key={integration.id}
            sx={{
              height: 280,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              opacity: !isAuthenticated() ? 0.6 : 1,
              "&:hover": {
                boxShadow: 4,
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            {/* Connection Status */}
            {integration.connected ? (
              <Chip
                label="Connected"
                color="success"
                size="small"
                sx={{ position: "absolute", top: 16, right: 16 }}
              />
            ) : (
              <Chip
                label="Not Connected"
                color="warning"
                size="small"
                sx={{ position: "absolute", top: 16, right: 16 }}
              />
            )}

            <CardContent
              sx={{
                padding: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Content */}
              <Box sx={{ textAlign: "center", flex: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 2 }}>
                  {integration.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {integration.description}
                </Typography>
              </Box>

              {/* Action Button */}
              <Button
                variant={integration.connected ? "outlined" : "contained"}
                color="primary"
                onClick={() => handleConnect(integration.id)}
                fullWidth
                sx={{ mt: "auto" }}
                disabled={!isAuthenticated()}
              >
                {integration.connected ? "View Details" : "Connect Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Shopify Connection Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Connect Shopify Store</DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            Enter your shop domain (e.g., "my-store" for my-store.myshopify.com)
          </Alert>

          <TextField
            fullWidth
            label="Shop Domain"
            placeholder="your-shop-name"
            value={shopDomain}
            onChange={(e) => setShopDomain(e.target.value)}
            error={!!error}
            helperText={error || "Don't include .myshopify.com"}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button
            onClick={handleShopifyConnect}
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={16} /> : null}
          >
            {loading ? "Connecting..." : "Connect"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};