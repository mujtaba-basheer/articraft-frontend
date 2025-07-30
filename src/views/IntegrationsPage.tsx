import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Chip,
  Grid as Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors";

const IntegrationsContainer = styled(Box)(() => ({
  padding: "20px",
  backgroundColor: "#fafbfc",
  minHeight: "100%",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}));

const IntegrationCard = styled(Card)<{ connected?: boolean }>(({ }) => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  position: "relative",
  transition: "all 0.2s ease",
  height: "240px",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const ConnectButton = styled(Button)(() => ({
  height: "32px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "none",
  padding: "6px 16px",
  background: `linear-gradient(135deg, ${colors.blue500} 0%, ${colors.blue600} 100%)`,
  color: colors.baseWhite,
  "&:hover": {
    background: `linear-gradient(135deg, ${colors.blue600} 0%, ${colors.blue700} 100())`,
  },
}));

const MoreDetailsButton = styled(Button)(() => ({
  height: "32px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: 500,
  textTransform: "none",
  padding: "6px 12px",
  color: colors.gray600,
  backgroundColor: "transparent",
  border: "none",
  "&:hover": {
    backgroundColor: colors.gray50,
    color: colors.gray700,
  },
}));

const ConnectedChip = styled(Chip)(() => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  height: "20px",
  fontSize: "10px",
  fontWeight: 500,
  backgroundColor: colors.green100,
  color: colors.green700,
  "& .MuiChip-label": {
    padding: "0 6px",
  },
}));

const ActionRequiredIcon = styled(Box)(() => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: colors.orange500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
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

const ExclamationIcon = () => "!";

const ArrowIcon = () => (
  <Box
    component="span"
    sx={{ 
      fontSize: "12px",
      marginLeft: "4px"
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

export const IntegrationsPage = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "meta",
      name: "Meta",
      description: "Monitor Facebook and Instagram ad campaigns, manage budgets, and improve targeting.",
      icon: <MetaIcon />,
      connected: true,
    },
    {
      id: "google-ads",
      name: "Google Ads",
      description: "Access detailed performance metrics to optimize ad spend and track conversions.",
      icon: <GoogleAdsIcon />,
      connected: true,
    },
    {
      id: "google-analytics",
      name: "Google Analytics 4",
      description: "Track Amazon ad performance, monitor ad spend, and enhance your advertising strategy.",
      icon: <GoogleAnalyticsIcon />,
      connected: false,
    },
    {
      id: "shopify",
      name: "Shopify",
      description: "Track Amazon ad performance, monitor ad spend, and enhance your advertising strategy.",
      icon: <ShopifyIcon />,
      connected: false,
    },
  ]);

  const handleConnect = (integrationId: string) => {
    setIntegrations(prev => 
      prev.map(integration => 
        integration.id === integrationId 
          ? { ...integration, connected: true }
          : integration
      )
    );
  };

  const handleMoreDetails = (integrationId: string) => {
    console.log(`Show more details for ${integrationId}`);
  };

  return (
    <IntegrationsContainer>
     

      {/* Integrations Grid */}
      <Grid container spacing={3}>
        {integrations.map((integration) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={integration.id}>
            <IntegrationCard connected={integration.connected}>
              <CardContent sx={{ padding: "20px", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Status Indicator */}
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

                {/* Icon and Title */}
                <Stack alignItems="center" sx={{ marginBottom: "16px", marginTop: "20px" }}>
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

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: colors.gray600,
                    lineHeight: 1.5,
                    marginBottom: "auto",
                    textAlign: "center",
                  }}
                >
                  {integration.description}
                </Typography>

                {/* Action Buttons */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: "20px" }}>
                  <MoreDetailsButton
                    onClick={() => handleMoreDetails(integration.id)}
                    endIcon={<ArrowIcon />}
                  >
                    More details
                  </MoreDetailsButton>

                  {!integration.connected && (
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
      </Grid>
    </IntegrationsContainer>
  );
};