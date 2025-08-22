import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PerformanceContainer = styled(Box)(() => ({
  padding: "24px",
  backgroundColor: "#fafbfc",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}));

const HeaderSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "32px",
}));

const ActionCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  transition: "all 0.2s ease",
  padding: "20px",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transform: "translateY(-1px)",
  },
}));

const ChartCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  transition: "all 0.2s ease",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const CampaignCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  padding: "24px",
  marginBottom: "16px",
  transition: "all 0.2s ease",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const CreateCampaignButton = styled(Button)(() => ({
  height: "40px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  padding: "10px 24px",
  background: colors.gray900,
  color: colors.baseWhite,
  "&:hover": {
    background: colors.gray800,
  },
}));

const ExportButton = styled(Button)(() => ({
  height: "40px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  padding: "10px 20px",
  color: colors.gray700,
  backgroundColor: "transparent",
  border: `1px solid ${colors.gray300}`,
  "&:hover": {
    backgroundColor: colors.gray50,
  },
}));

const ActionButton = styled(Button)(() => ({
  height: "32px",
  borderRadius: "6px",
  fontSize: "13px",
  fontWeight: 500,
  textTransform: "none",
  padding: "6px 16px",
  color: colors.gray700,
  backgroundColor: colors.gray100,
  border: "none",
  "&:hover": {
    backgroundColor: colors.gray200,
  },
}));

const ViewAllButton = styled(Button)(() => ({
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  color: colors.gray700,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: colors.gray50,
  },
}));

// Simple responsive layouts
const SuggestionsSection = styled(Box)(() => ({
  marginBottom: "32px",
}));

const ChartsRow = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",
  marginBottom: "32px",
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "1fr 1fr",
  },
}));

const TabsContainer = styled(Box)(() => ({
  marginBottom: "24px",
}));

// Icons
const LightningIcon = () => (
  <Box
    sx={{
      width: "20px",
      height: "20px",
      color: "#F59E0B",
      fontSize: "16px",
    }}
  >
    ⚡
  </Box>
);

const TrendUpIcon = () => (
  <Box
    sx={{
      width: "16px",
      height: "16px",
      color: colors.green600,
      fontSize: "12px",
    }}
  >
    📈
  </Box>
);

const WarningIcon = () => (
  <Box
    sx={{
      width: "16px",
      height: "16px",
      color: "#F59E0B",
      fontSize: "12px",
    }}
  >
    ⚠️
  </Box>
);

const EditIcon = () => (
  <Box
    sx={{
      width: "16px",
      height: "16px",
      color: colors.gray500,
      fontSize: "12px",
    }}
  >
    ✏️
  </Box>
);

const DeleteIcon = () => (
  <Box
    sx={{
      width: "16px",
      height: "16px",
      color: colors.gray500,
      fontSize: "12px",
    }}
  >
    🗑️
  </Box>
);

const PlayIcon = () => (
  <Box
    sx={{
      width: "16px",
      height: "16px",
      color: colors.gray500,
      fontSize: "12px",
    }}
  >
    ▶️
  </Box>
);

// Mock data
const revenueSpendData = [
  { date: "1/1/2024", revenue: 4800, spend: 1200 },
  { date: "1/2/2024", revenue: 5200, spend: 1400 },
  { date: "1/3/2024", revenue: 5800, spend: 1100 },
  { date: "1/4/2024", revenue: 4900, spend: 1500 },
  { date: "1/5/2024", revenue: 6300, spend: 1300 },
  { date: "1/6/2024", revenue: 5900, spend: 1600 },
  { date: "1/7/2024", revenue: 7000, spend: 1400 },
];

const roasData = [
  { channel: "Meta Ads", roas: 3.9 },
  { channel: "Google Ads", roas: 3.6 },
  { channel: "Google Shopping", roas: 3.2 },
];

const campaigns = [
  {
    id: 1,
    name: "Summer Sale - Meta Retargeting",
    platform: "Meta",
    status: "active",
    budget: 5000,
    spent: 4200,
    impressions: 125000,
    clicks: 3200,
    ctr: 2.56,
    cpc: 1.31,
    conversions: 89,
    cpa: 47.19,
    revenue: 18900,
    roas: 4.5,
    roasChange: "up"
  },
  {
    id: 2,
    name: "Brand Keywords - Google Search",
    platform: "Google",
    status: "active",
    budget: 3000,
    spent: 2800,
    impressions: 89000,
    clicks: 2100,
    ctr: 2.36,
    cpc: 1.33,
    conversions: 67,
    cpa: 41.79,
    revenue: 15200,
    roas: 5.43,
    roasChange: "up"
  },
  {
    id: 3,
    name: "Shopping Ads - Google",
    platform: "Google",
    status: "paused",
    budget: 4500,
    spent: 4100,
    impressions: 156000,
    clicks: 2800,
    ctr: 1.79,
    cpc: 1.46,
    conversions: 45,
    cpa: 91.11,
    revenue: 12300,
    roas: 3.0,
    roasChange: "down"
  },
];

const formatCurrency = (value: number) => {
  return `$${value.toLocaleString()}`;
};

const formatPercentage = (value: number) => {
  return `${value.toFixed(2)}%`;
};

export const PerformanceHub = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <PerformanceContainer>
      {/* Header */}
     

      {/* Suggested Actions */}
      <SuggestionsSection>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
           
            <LightningIcon />
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
              Suggested Actions
            </Typography>
          </Box>
          <ViewAllButton endIcon={<Box sx={{ fontSize: "12px" }}>→</Box>}>
            View All (3)
          </ViewAllButton>
        </Box>
        <Typography variant="body2" sx={{ color: colors.gray600, mb: 3 }}>
          AI-powered recommendations to boost your performance
        </Typography>

        <Stack spacing={2}>
          <ActionCard>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box sx={{ flex: 1 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                  <TrendUpIcon />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                    Scale Top-Performing SKUs
                  </Typography>
                  <Chip
                    label="high"
                    size="small"
                    sx={{
                      height: "20px",
                      fontSize: "11px",
                      fontWeight: 600,
                      backgroundColor: "#EF4444",
                      color: colors.baseWhite,
                    }}
                  />
                </Stack>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Premium Cotton T-Shirt has 7.94 ROAS - increase ad spend allocation
                </Typography>
                <Typography variant="body2" sx={{ color: colors.green600, fontWeight: 600 }}>
                  +$5,200 potential revenue
                </Typography>
              </Box>
              <ActionButton>Increase Budget</ActionButton>
            </Stack>
          </ActionCard>

          <ActionCard>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box sx={{ flex: 1 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                  <WarningIcon />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                    Underperforming Denim Campaign
                  </Typography>
                  <Chip
                    label="medium"
                    size="small"
                    sx={{
                      height: "20px",
                      fontSize: "11px",
                      fontWeight: 600,
                      backgroundColor: colors.gray800,
                      color: colors.baseWhite,
                    }}
                  />
                </Stack>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Sustainable Denim Jeans ROAS dropped to 3.8x - review targeting
                </Typography>
                <Typography variant="body2" sx={{ color: colors.green600, fontWeight: 600 }}>
                  Prevent -$2,100 loss
                </Typography>
              </Box>
              <ActionButton>Review Campaign</ActionButton>
            </Stack>
          </ActionCard>
        </Stack>
      </SuggestionsSection>

      {/* Charts Row */}
      <ChartsRow>
        {/* Revenue vs Spend Trend */}
        <ChartCard>
          <CardContent sx={{ padding: "24px" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                Revenue vs Spend Trend
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                Daily performance over the last 7 days
              </Typography>
            </Box>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueSpendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: colors.baseWhite,
                      border: `1px solid ${colors.gray200}`,
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: "#10b981", strokeWidth: 0, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="spend"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ fill: "#ef4444", strokeWidth: 0, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </ChartCard>

        {/* ROAS by Channel */}
        <ChartCard>
          <CardContent sx={{ padding: "24px" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                ROAS by Channel
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                Return on ad spend comparison
              </Typography>
            </Box>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={roasData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="channel" 
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: colors.baseWhite,
                      border: `1px solid ${colors.gray200}`,
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                  <Bar
                    dataKey="roas"
                    fill="#8B5CF6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </ChartCard>
      </ChartsRow>

      {/* Tabs Navigation */}
      <TabsContainer>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            borderBottom: `1px solid ${colors.gray200}`,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: "14px",
              color: colors.gray600,
              "&.Mui-selected": {
                color: colors.gray900,
                fontWeight: 600,
              },
            },
          }}
        >
          <Tab 
            icon={<Box sx={{ fontSize: "16px" }}>🎯</Box>}
            iconPosition="start"
            label="Campaigns" 
          />
          <Tab 
            icon={<Box sx={{ fontSize: "16px" }}>📦</Box>}
            iconPosition="start"
            label="Products" 
          />
          <Tab 
            icon={<Box sx={{ fontSize: "16px" }}>📈</Box>}
            iconPosition="start"
            label="Channels" 
          />
        </Tabs>
      </TabsContainer>

      {/* Campaign Performance Table */}
      {selectedTab === 0 && (
        <Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
              Campaign Performance
            </Typography>
            <Typography variant="body2" sx={{ color: colors.gray600 }}>
              Detailed metrics for all your advertising campaigns
            </Typography>
          </Box>

          <Stack spacing={2}>
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        {campaign.name}
                      </Typography>
                      <Chip
                        label={campaign.platform}
                        size="small"
                        sx={{
                          height: "20px",
                          fontSize: "11px",
                          fontWeight: 600,
                          backgroundColor: campaign.platform === "Meta" ? "#1877F2" : "#4285F4",
                          color: colors.baseWhite,
                        }}
                      />
                      <Chip
                        label={campaign.status}
                        size="small"
                        sx={{
                          height: "20px",
                          fontSize: "11px",
                          fontWeight: 600,
                          backgroundColor: campaign.status === "active" ? colors.green600 : colors.gray600,
                          color: colors.baseWhite,
                        }}
                      />
                    </Stack>
                    <Typography variant="body2" sx={{ color: colors.gray600 }}>
                      Budget: {formatCurrency(campaign.budget)} • Spent: {formatCurrency(campaign.spent)}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                    {campaign.status === "paused" ? (
                      <IconButton size="small">
                        <PlayIcon />
                      </IconButton>
                    ) : (
                      <IconButton size="small">
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Stack>
                </Stack>

                {/* Metrics Grid */}
                <Box sx={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", 
                  gap: "24px" 
                }}>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      Impressions
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                      {campaign.impressions.toLocaleString()}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      Clicks
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                      {campaign.clicks.toLocaleString()}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      CTR
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                      {formatPercentage(campaign.ctr)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      CPC
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                      ${campaign.cpc.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      Conversions
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                      {campaign.conversions}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      CPA
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                      ${campaign.cpa.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      Revenue
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                      {formatCurrency(campaign.revenue)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                      ROAS
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        {campaign.roas.toFixed(1)}x
                      </Typography>
                      <Box sx={{ 
                        fontSize: "12px", 
                        color: campaign.roasChange === "up" ? colors.green600 : colors.error500 
                      }}>
                        {campaign.roasChange === "up" ? "↗" : "↘"}
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </CampaignCard>
            ))}
          </Stack>
        </Box>
      )}

      {/* Placeholder for other tabs */}
      {selectedTab === 1 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" sx={{ color: colors.gray600 }}>
            Products performance coming soon...
          </Typography>
        </Box>
      )}

      {selectedTab === 2 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" sx={{ color: colors.gray600 }}>
            Channels performance coming soon...
          </Typography>
        </Box>
      )}
    </PerformanceContainer>
  );
};