import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Chip,
  Grid as Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Link,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors";

const IntegrationsContainer = styled(Box)(() => ({
  padding: "20px",
  backgroundColor: "#fafbfc",
  minHeight: "100%",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}));

const IntegrationCard = styled(Card)<{ connected?: boolean }>(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  position: "relative",
  transition: "all 0.2s ease",
  height: "280px",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transform: "translateY(-2px)",
  },
}));

const ConnectButton = styled(Button)(() => ({
  height: "36px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "none",
  padding: "8px 20px",
  background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
  color: colors.baseWhite,
  border: "none",
  boxShadow: "0 2px 4px rgba(59, 130, 246, 0.15)",
  transition: "all 0.2s ease",
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.blue600} 0%, ${colors.blue700} 100%)`,
    boxShadow: "0 4px 8px rgba(59, 130, 246, 0.25)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0 2px 4px rgba(59, 130, 246, 0.15)",
  },
}));

const ViewDetailsButton = styled(Button)(() => ({
  height: "36px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: 500,
  textTransform: "none",
  padding: "8px 16px",
  color: colors.blue600,
  backgroundColor: "transparent",
  border: `1px solid ${colors.blue200}`,
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: colors.blue50,
    color: colors.blue700,
    borderColor: colors.blue300,
  },
}));

const ModalConnectButton = styled(Button)(() => ({
  height: "40px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  padding: "10px 24px",
  background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
  color: colors.baseWhite,
  minWidth: "120px",
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.blue600} 0%, ${colors.blue700} 100%)`,
  },
  "&:disabled": {
    background: colors.gray300,
    color: colors.gray500,
  },
}));

const ConnectedChip = styled(Chip)(() => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  height: "24px",
  fontSize: "11px",
  fontWeight: 500,
  backgroundColor: colors.green100,
  color: colors.green700,
  "& .MuiChip-label": {
    padding: "0 8px",
  },
}));

const ActionRequiredIcon = styled(Box)(() => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: colors.orange500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  color: colors.baseWhite,
  fontWeight: "bold",
}));

// Platform Icons
const MetaIcon = () => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #1877F2 0%, #42A5F5 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "20px",
      fontWeight: "bold",
    }}
  >
    f
  </Box>
);

const GoogleAdsIcon = () => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    G
  </Box>
);

const GoogleAnalyticsIcon = () => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    GA
  </Box>
);

const ShopifyIcon = () => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #96BF48 0%, #7AB55C 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    S
  </Box>
);

const CheckIcon = () => (
  <Box
    component="svg"
    sx={{ width: 12, height: 12, color: colors.green600 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </Box>
);

const CloseIcon = () => (
  <Box
    component="svg"
    sx={{ width: 20, height: 20 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </Box>
);

const EyeIcon = ({ visible }: { visible: boolean }) => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.gray500 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    {visible ? (
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    ) : (
      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
    )}
  </Box>
);

const ExclamationIcon = () => "!";

const ArrowIcon = () => (
  <Box
    component="span"
    sx={{
      fontSize: "12px",
      marginLeft: "4px",
    }}
  >
    →
  </Box>
);

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
}

interface ConnectionFormData {
  [key: string]: string;
}

interface FieldConfig {
  key: string;
  label: string;
  type: string;
  placeholder?: string;
  helpText?: string;
  options?: { value: string; label: string }[];
  showWhen?: string;
}

declare global {
  interface Window {
    FB: {
      getLoginStatus: (callback: any) => any;
      login: (callback: any, options: { scope: string }) => any;
    };
  }
}

export const IntegrationsPage = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "meta",
      name: "Meta",
      description:
        "Monitor Facebook and Instagram ad campaigns, manage budgets, and improve targeting.",
      icon: <MetaIcon />,
      connected: false,
    },
    {
      id: "google-ads",
      name: "Google Ads",
      description:
        "Access detailed performance metrics to optimize ad spend and track conversions.",
      icon: <GoogleAdsIcon />,
      connected: true,
    },
    {
      id: "google-analytics",
      name: "Google Analytics 4",
      description:
        "Track website analytics, user behavior, and conversion metrics.",
      icon: <GoogleAnalyticsIcon />,
      connected: false,
    },
    {
      id: "shopify",
      name: "Shopify",
      description:
        "Connect your Shopify store to track sales, orders, and customer data.",
      icon: <ShopifyIcon />,
      connected: false,
    },
  ]);

  const [openModal, setOpenModal] = useState<string | null>(null);
  const [openDetailsModal, setOpenDetailsModal] = useState<string | null>(null);
  const [formData, setFormData] = useState<ConnectionFormData>({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isModifying, setIsModifying] = useState(false);
  const [visibleFields, setVisibleFields] = useState<Record<string, boolean>>(
    {}
  );

  const handleConnect = (integrationId: string) => {
    setOpenModal(integrationId);
    setFormData({});
    setErrors({});
    setIsModifying(false);
  };

  const handleViewDetails = (integrationId: string) => {
    const integration = integrations.find((i) => i.id === integrationId);
    if (integration?.connected) {
      setOpenDetailsModal(integrationId);
      // Load existing connection data for display (in real app, fetch from API)
      setFormData(getMockConnectionData(integrationId));
    }
  };

  const handleModifyAccount = () => {
    setIsModifying(true);
    setOpenModal(openDetailsModal);
    setOpenDetailsModal(null);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(null);
    setFormData({});
    setVisibleFields({});
  };

  const toggleFieldVisibility = (fieldKey: string) => {
    setVisibleFields((prev) => ({
      ...prev,
      [fieldKey]: !prev[fieldKey],
    }));
  };

  const handleCloseModal = () => {
    setOpenModal(null);
    setFormData({});
    setErrors({});
    setIsModifying(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (integrationId: string): boolean => {
    const newErrors: Record<string, string> = {};
    const requiredFields = getRequiredFields(integrationId);

    requiredFields.forEach((field) => {
      if (!formData[field.key] || formData[field.key].trim() === "") {
        newErrors[field.key] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitConnection = async () => {
    if (!openModal || !validateForm(openModal)) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (!isModifying) {
        setIntegrations((prev) =>
          prev.map((integration) =>
            integration.id === openModal
              ? { ...integration, connected: true }
              : integration
          )
        );
      }

      handleCloseModal();
    } catch (error) {
      console.error("Connection failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const getMockConnectionData = (integrationId: string): ConnectionFormData => {
    // Mock data for demonstration - in real app, this would come from API
    const mockData: Record<string, ConnectionFormData> = {
      meta: {
        appId: "1234567890123456",
        appSecret: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
        accessToken:
          "EAABwzLixnjYBOZC8ZCqVZBZCxJZBZCqVZBZCxJZBZCqVZBZCxJZBZCqVZBZCxJ",
      },
      "google-ads": {
        clientId:
          "123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com",
        clientSecret: "GOCSPX-abcdefghijklmnopqrstuvwx",
        refreshToken:
          "1//0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        developerToken: "abcdefghijklmnopqr",
        customerId: "1234567890",
      },
      "google-analytics": {
        authMethod: "oauth",
        clientId:
          "123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com",
        clientSecret: "GOCSPX-abcdefghijklmnopqrstuvwx",
        refreshToken:
          "1//0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        propertyId: "123456789",
      },
      shopify: {
        shopDomain: "my-awesome-shop",
        accessToken:
          "shpat_abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        apiKey: "abcdefghijklmnopqrstuvwxyz123456",
      },
    };
    return mockData[integrationId] || {};
  };

  const renderDetailsModal = () => {
    if (!openDetailsModal) return null;

    const integration = integrations.find((i) => i.id === openDetailsModal);
    if (!integration) return null;

    const fields = getRequiredFields(openDetailsModal);
    const connectionData = formData;

    return (
      <Dialog
        open={!!openDetailsModal}
        onClose={handleCloseDetailsModal}
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 24px 16px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {integration.icon}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {integration.name} Connection
              </Typography>
              <Chip
                icon={<CheckIcon />}
                label="Connected"
                size="small"
                sx={{
                  height: "20px",
                  fontSize: "10px",
                  backgroundColor: colors.green100,
                  color: colors.green700,
                  mt: 0.5,
                }}
              />
            </Box>
          </Box>
          <IconButton onClick={handleCloseDetailsModal} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ padding: "0 24px" }}>
          <Alert severity="success" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Your {integration.name} account is successfully connected and
              active.
            </Typography>
          </Alert>

          <Typography
            variant="subtitle2"
            sx={{ mb: 2, fontWeight: 600, color: colors.gray800 }}
          >
            Connection Details
          </Typography>

          <Stack spacing={2.5}>
            {fields.map((field) => {
              // Skip conditional fields for details view or show based on stored config
              if (field.showWhen && field.key !== "authMethod") {
                const [conditionField, conditionValue] =
                  field.showWhen.split("=");
                if (connectionData[conditionField] !== conditionValue) {
                  return null;
                }
              }

              const value = connectionData[field.key];
              if (!value) return null;

              const isSecretField =
                field.type === "password" || field.type === "textarea";
              const isFieldVisible = visibleFields[field.key];
              const displayValue =
                isSecretField && !isFieldVisible
                  ? "••••••••••••••••••••••••••••••••"
                  : value;

              return (
                <Box
                  key={field.key}
                  sx={{
                    padding: "12px",
                    backgroundColor: colors.gray50,
                    borderRadius: "8px",
                    border: `1px solid ${colors.gray200}`,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.gray600,
                        fontSize: "11px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {field.label}
                    </Typography>
                    {isSecretField && (
                      <IconButton
                        size="small"
                        onClick={() => toggleFieldVisibility(field.key)}
                        sx={{
                          padding: "2px",
                          "&:hover": {
                            backgroundColor: colors.gray200,
                          },
                        }}
                      >
                        <EyeIcon visible={isFieldVisible} />
                      </IconButton>
                    )}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.gray800,
                      fontFamily: isSecretField ? "monospace" : "inherit",
                      fontSize: isSecretField ? "13px" : "14px",
                      wordBreak: "break-all",
                      userSelect: isFieldVisible ? "text" : "none",
                    }}
                  >
                    {displayValue}
                  </Typography>
                </Box>
              );
            })}
          </Stack>

          <Box
            sx={{
              mt: 3,
              padding: "12px",
              backgroundColor: colors.blue50,
              borderRadius: "8px",
              border: `1px solid ${colors.blue200}`,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: colors.blue700,
                fontSize: "11px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Connection Status
            </Typography>
            <Typography variant="body2" sx={{ color: colors.blue800, mt: 0.5 }}>
              Last synced: {new Date().toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.blue800 }}>
              Status: Active and healthy
            </Typography>
          </Box>
        </DialogContent>

        <Divider sx={{ my: 2 }} />

        <DialogActions sx={{ padding: "16px 24px 20px", gap: 1 }}>
          <Button
            onClick={handleCloseDetailsModal}
            sx={{
              color: colors.gray600,
              "&:hover": { backgroundColor: colors.gray50 },
            }}
          >
            Close
          </Button>
          <ModalConnectButton
            onClick={handleModifyAccount}
            variant="outlined"
            sx={{
              background: "transparent",
              color: colors.blue600,
              border: `1px solid ${colors.blue600}`,
              "&:hover": {
                background: colors.blue50,
                border: `1px solid ${colors.blue700}`,
              },
            }}
          >
            Modify Account
          </ModalConnectButton>
        </DialogActions>
      </Dialog>
    );
  };

  const getRequiredFields = (integrationId: string): FieldConfig[] => {
    const fieldConfigs: Record<string, FieldConfig[]> = {
      meta: [
        {
          key: "appId",
          label: "App ID",
          type: "text",
          placeholder: "Enter your Facebook App ID",
          helpText: "Found in Facebook Developer Console under Basic Settings",
        },
        {
          key: "appSecret",
          label: "App Secret",
          type: "password",
          placeholder: "Enter your Facebook App Secret",
          helpText:
            "Click 'Show' next to App Secret in Facebook Developer Console",
        },
        {
          key: "accessToken",
          label: "Access Token",
          type: "password",
          placeholder: "Enter your access token",
          helpText: "Generated from Graph API Explorer or your app",
        },
      ],
      "google-ads": [
        {
          key: "clientId",
          label: "Client ID",
          type: "text",
          placeholder: "123456-abcdef.apps.googleusercontent.com",
          helpText: "OAuth 2.0 Client ID from Google Cloud Console",
        },
        {
          key: "clientSecret",
          label: "Client Secret",
          type: "password",
          placeholder: "Enter your client secret",
          helpText: "OAuth 2.0 Client Secret from Google Cloud Console",
        },
        {
          key: "refreshToken",
          label: "Refresh Token",
          type: "password",
          placeholder: "1//0abcdefghijkl...",
          helpText: "Generated using OAuth2 flow",
        },
        {
          key: "developerToken",
          label: "Developer Token",
          type: "password",
          placeholder: "Enter your developer token",
          helpText: "From Google Ads Manager Account API Center",
        },
        {
          key: "customerId",
          label: "Customer ID",
          type: "text",
          placeholder: "1234567890",
          helpText: "10-digit Google Ads Customer ID (without dashes)",
        },
      ],
      "google-analytics": [
        {
          key: "authMethod",
          label: "Authentication Method",
          type: "select",
          options: [
            { value: "oauth", label: "OAuth 2.0 (Recommended)" },
            { value: "serviceAccount", label: "Service Account" },
          ],
        },
        {
          key: "clientId",
          label: "Client ID",
          type: "text",
          placeholder: "123456-abcdef.apps.googleusercontent.com",
          helpText: "OAuth 2.0 Client ID from Google Cloud Console",
          showWhen: "authMethod=oauth",
        },
        {
          key: "clientSecret",
          label: "Client Secret",
          type: "password",
          placeholder: "Enter your client secret",
          helpText: "OAuth 2.0 Client Secret",
          showWhen: "authMethod=oauth",
        },
        {
          key: "refreshToken",
          label: "Refresh Token",
          type: "password",
          placeholder: "1//0abcdefghijkl...",
          helpText: "Generated using OAuth2 flow",
          showWhen: "authMethod=oauth",
        },
        {
          key: "serviceAccountEmail",
          label: "Service Account Email",
          type: "text",
          placeholder: "service-account@project.iam.gserviceaccount.com",
          helpText: "Email from service account JSON file",
          showWhen: "authMethod=serviceAccount",
        },
        {
          key: "privateKey",
          label: "Private Key",
          type: "textarea",
          placeholder: "-----BEGIN PRIVATE KEY-----...",
          helpText: "Private key from service account JSON file",
          showWhen: "authMethod=serviceAccount",
        },
        {
          key: "propertyId",
          label: "GA4 Property ID",
          type: "text",
          placeholder: "123456789",
          helpText: "Found in GA4 Admin > Property Settings",
        },
      ],
      shopify: [
        {
          key: "shopDomain",
          label: "Shop Domain",
          type: "text",
          placeholder: "your-shop-name",
          helpText: "Your shop name from your-shop-name.myshopify.com",
        },
        {
          key: "accessToken",
          label: "Admin API Access Token",
          type: "password",
          placeholder: "shpat_...",
          helpText: "Generated from your custom app in Shopify Admin",
        },
        {
          key: "apiKey",
          label: "API Key",
          type: "text",
          placeholder: "Enter your API key",
          helpText: "From your custom app's API credentials",
        },
      ],
    };

    return fieldConfigs[integrationId as keyof typeof fieldConfigs] || [];
  };

  const renderConnectionModal = () => {
    if (!openModal) return null;

    const integration = integrations.find((i) => i.id === openModal);
    if (!integration) return null;

    const fields = getRequiredFields(openModal);
    const authMethod = formData.authMethod;

    return (
      <Dialog
        open={!!openModal}
        onClose={handleCloseModal}
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 24px 16px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {integration.icon}
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {isModifying ? "Modify" : "Connect"} {integration.name}
            </Typography>
          </Box>
          <IconButton onClick={handleCloseModal} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ padding: "0 24px" }}>
          <Alert severity={isModifying ? "warning" : "info"} sx={{ mb: 3 }}>
            <Typography variant="body2">
              {isModifying
                ? `Update your ${integration.name} connection credentials. Changes will take effect immediately.`
                : `To connect ${integration.name}, you'll need to provide your API credentials.`}
              <Link
                href={getDocumentationLink(openModal)}
                target="_blank"
                sx={{ ml: 1 }}
              >
                View setup guide →
              </Link>
            </Typography>
          </Alert>

          <Stack spacing={3}>
            {fields.map((field) => {
              // Check if field should be shown based on conditions
              if (field.showWhen) {
                const [conditionField, conditionValue] =
                  field.showWhen.split("=");
                if (formData[conditionField] !== conditionValue) {
                  return null;
                }
              }

              if (field.type === "select") {
                return (
                  <FormControl key={field.key} fullWidth>
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                      value={formData[field.key] || ""}
                      onChange={(e) =>
                        handleInputChange(field.key, e.target.value)
                      }
                      label={field.label}
                      error={!!errors[field.key]}
                    >
                      {field.options?.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {field.helpText && (
                      <Typography
                        variant="caption"
                        sx={{ mt: 1, color: colors.gray600 }}
                      >
                        {field.helpText}
                      </Typography>
                    )}
                  </FormControl>
                );
              }

              return (
                <Box key={field.key}>
                  <TextField
                    fullWidth
                    label={field.label}
                    type={field.type === "password" ? "password" : "text"}
                    placeholder={field.placeholder}
                    value={formData[field.key] || ""}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                    error={!!errors[field.key]}
                    helperText={errors[field.key] || field.helpText}
                    multiline={field.type === "textarea"}
                    rows={field.type === "textarea" ? 4 : 1}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Box>
              );
            })}
          </Stack>

          {openModal === "google-analytics" &&
            authMethod === "serviceAccount" && (
              <Alert severity="warning" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Remember to add the service account email to your GA4 property
                  with Viewer permissions.
                </Typography>
              </Alert>
            )}
        </DialogContent>

        <Divider sx={{ my: 2 }} />

        <DialogActions sx={{ padding: "16px 24px 20px", gap: 1 }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              color: colors.gray600,
              "&:hover": { backgroundColor: colors.gray50 },
            }}
          >
            Cancel
          </Button>
          <ModalConnectButton
            onClick={handleSubmitConnection}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={16} /> : null}
          >
            {loading
              ? isModifying
                ? "Updating..."
                : "Connecting..."
              : isModifying
                ? "Update Connection"
                : "Connect"}
          </ModalConnectButton>
        </DialogActions>
      </Dialog>
    );
  };

  const getDocumentationLink = (integrationId: string) => {
    const links = {
      meta: "https://developers.facebook.com/docs/facebook-login/guides/access-tokens/",
      "google-ads":
        "https://developers.google.com/google-ads/api/docs/first-call/overview",
      "google-analytics":
        "https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client",
      shopify: "https://shopify.dev/docs/apps/auth/get-access-tokens",
    };
    return links[integrationId as keyof typeof links] || "#";
  };

  const handleFbLoginInit = () => {
    window.FB.login(
      function (response: any) {
        console.log({ response });
      },
      { scope: "public_profile,email" }
    );
  };

  // useEffect(() => {
  //   window.addEventListener("");
  // });

  useEffect(() => {
    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.defer = true;
      js.async = true;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0&appId=1095248368702808";
      js.crossOrigin = "anonymous";
      fjs?.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <IntegrationsContainer>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <IntegrationCard connected={false}>
            <CardContent
              sx={{
                padding: "24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <ActionRequiredIcon>
                <ExclamationIcon />
              </ActionRequiredIcon>

              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Stack
                  alignItems="center"
                  sx={{ marginBottom: "16px", marginTop: "8px" }}
                >
                  <MetaIcon />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: colors.gray900,
                      marginTop: "12px",
                      textAlign: "center",
                    }}
                  >
                    Meta
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: colors.gray600,
                    lineHeight: 1.5,
                    textAlign: "center",
                    marginBottom: "20px",
                    flex: 1,
                  }}
                >
                  Monitor Facebook and Instagram ad campaigns, manage budgets,
                  and improve targeting.
                </Typography>
              </Box>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  gap: 2,
                  marginTop: "auto",
                }}
              >
                <ConnectButton
                  onClick={handleFbLoginInit}
                  endIcon={<ArrowIcon />}
                >
                  Connect now
                </ConnectButton>
              </Stack>
            </CardContent>
          </IntegrationCard>
        </Grid>
        {integrations.map((integration) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={integration.id}>
            <IntegrationCard connected={integration.connected}>
              <CardContent
                sx={{
                  padding: "24px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {integration.connected ? (
                  <ConnectedChip
                    icon={<CheckIcon />}
                    label="Connected"
                    size="small"
                  />
                ) : (
                  <ActionRequiredIcon>
                    <ExclamationIcon />
                  </ActionRequiredIcon>
                )}

                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Stack
                    alignItems="center"
                    sx={{ marginBottom: "16px", marginTop: "8px" }}
                  >
                    {integration.icon}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: colors.gray900,
                        marginTop: "12px",
                        textAlign: "center",
                      }}
                    >
                      {integration.name}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: colors.gray600,
                      lineHeight: 1.5,
                      textAlign: "center",
                      marginBottom: "20px",
                      flex: 1,
                    }}
                  >
                    {integration.description}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    gap: 2,
                    marginTop: "auto",
                  }}
                >
                  {integration.connected ? (
                    <ViewDetailsButton
                      onClick={() => handleViewDetails(integration.id)}
                      endIcon={<ArrowIcon />}
                    >
                      View Details
                    </ViewDetailsButton>
                  ) : (
                    <ConnectButton
                      onClick={() => handleConnect(integration.id)}
                      endIcon={<ArrowIcon />}
                    >
                      Connect now
                    </ConnectButton>
                  )}
                </Stack>
              </CardContent>
            </IntegrationCard>
          </Grid>
        ))}
        <div
          className="fb-login-button"
          data-width="138.283"
          data-size=""
          data-button-type=""
          data-layout=""
          data-auto-logout-link="false"
          data-use-continue-as="false"
        ></div>
      </Grid>

      {renderConnectionModal()}
      {renderDetailsModal()}
    </IntegrationsContainer>
  );
};
