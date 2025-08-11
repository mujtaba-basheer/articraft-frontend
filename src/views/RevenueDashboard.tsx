import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardContainer = styled(Box)(() => ({
  padding: "24px",
  backgroundColor: "#fafbfc",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}));

const MetricCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  transition: "all 0.2s ease",
  height: "140px",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
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

const HealthScoreCard = styled(Card)<{ status: string }>(({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case "excellent": return "#F0FDF4";
      case "strong": return "#EFF6FF";
      case "good": return "#FFFBEB";
      default: return colors.gray100;
    }
  };

  const getStatusBorder = () => {
    switch (status) {
      case "excellent": return "#D1FAE5";
      case "strong": return "#DBEAFE";
      case "good": return "#FEF3C7";
      default: return colors.gray200;
    }
  };

  return {
    borderRadius: "12px",
    border: `1px solid ${getStatusBorder()}`,
    backgroundColor: getStatusColor(),
    padding: "20px",
    transition: "all 0.2s ease",
    height: "120px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
  };
});

// Simple responsive grid layouts
const MetricsRow = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "24px",
  marginBottom: "32px",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

const ChartsRow = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",
  marginBottom: "32px",
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "2fr 1fr",
  },
}));

const BottomRow = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "2fr 1fr",
  },
}));

// Icons
const DollarIcon = () => (
  <Box
    sx={{
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "20px",
      fontWeight: "bold",
    }}
  >
    $
  </Box>
);

const RefreshIcon = () => (
  <Box
    sx={{
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "16px",
    }}
  >
    ↻
  </Box>
);

const CartIcon = () => (
  <Box
    sx={{
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "16px",
    }}
  >
    🛒
  </Box>
);

const UserIcon = () => (
  <Box
    sx={{
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.baseWhite,
      fontSize: "16px",
    }}
  >
    👤
  </Box>
);

const TrendIcon = () => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "#D1FAE5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#10B981",
      fontSize: "24px",
      fontWeight: "bold",
    }}
  >
    📈
  </Box>
);

const SyncIcon = () => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "#DBEAFE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#3B82F6",
      fontSize: "24px",
    }}
  >
    🔄
  </Box>
);

const CustomerIcon = () => (
  <Box
    sx={{
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "#FEF3C7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#F59E0B",
      fontSize: "24px",
    }}
  >
    ⭐
  </Box>
);

// Mock data
const monthlyTrendData = [
  { month: "Jan", revenue: 125000, mrr: 45000 },
  { month: "Feb", revenue: 135000, mrr: 48000 },
  { month: "Mar", revenue: 140000, mrr: 52000 },
  { month: "Apr", revenue: 155000, mrr: 55000 },
  { month: "May", revenue: 175000, mrr: 58000 },
  { month: "Jun", revenue: 195000, mrr: 62000 },
  { month: "Jul", revenue: 215000, mrr: 65000 },
  { month: "Aug", revenue: 235000, mrr: 68000 },
  { month: "Sep", revenue: 250000, mrr: 72000 },
  { month: "Oct", revenue: 270000, mrr: 75000 },
  { month: "Nov", revenue: 285000, mrr: 78000 },
  { month: "Dec", revenue: 290000, mrr: 82000 },
];

const channelData = [
  { name: "Direct Sales", value: 125000, color: "#10B981" },
  { name: "E-commerce", value: 85000, color: "#3B82F6" },
  { name: "Marketplace", value: 45000, color: "#F59E0B" },
  { name: "Affiliate", value: 25000, color: "#8B5CF6" },
  { name: "Other", value: 10000, color: "#6B7280" },
];

const topProducts = [
  { rank: 1, name: "Premium Plan", revenue: 85000, units: 850, growth: 12.5, color: "#10B981" },
  { rank: 2, name: "Basic Plan", revenue: 65000, units: 1300, growth: 8.2, color: "#3B82F6" },
  { rank: 3, name: "Enterprise Plan", revenue: 45000, units: 150, growth: 25.8, color: "#8B5CF6" },
  { rank: 4, name: "Add-on Services", revenue: 25000, units: 500, growth: -3.2, color: "#F59E0B" },
  { rank: 5, name: "Professional Plan", revenue: 35000, units: 350, growth: 15.7, color: "#EF4444" },
];

const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
};

const formatPercentage = (value: number) => {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
};

export const RevenueDashboard = () => {
  return (
    <DashboardContainer>
      {/* Key Metrics Row */}
      <MetricsRow>
        <MetricCard>
          <CardContent sx={{ padding: "20px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Total Revenue
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                  $290,000
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: colors.green600, 
                    display: "flex", 
                    alignItems: "center",
                    fontSize: "12px"
                  }}
                >
                  ↗ +15.2% from last month
                </Typography>
              </Box>
              <DollarIcon />
            </Stack>
          </CardContent>
        </MetricCard>

        <MetricCard>
          <CardContent sx={{ padding: "20px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Monthly Recurring Revenue
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                  $82,000
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: colors.green600, 
                    display: "flex", 
                    alignItems: "center",
                    fontSize: "12px"
                  }}
                >
                  ↗ +8.3% from last month
                </Typography>
              </Box>
              <RefreshIcon />
            </Stack>
          </CardContent>
        </MetricCard>

        <MetricCard>
          <CardContent sx={{ padding: "20px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Average Order Value
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                  $59.18
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: colors.green600, 
                    display: "flex", 
                    alignItems: "center",
                    fontSize: "12px"
                  }}
                >
                  ↗ +3.7% from last month
                </Typography>
              </Box>
              <CartIcon />
            </Stack>
          </CardContent>
        </MetricCard>

        <MetricCard>
          <CardContent sx={{ padding: "20px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Customer Lifetime Value
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                  $485
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: colors.error500, 
                    display: "flex", 
                    alignItems: "center",
                    fontSize: "12px"
                  }}
                >
                  ↘ -2.1% from last month
                </Typography>
              </Box>
              <UserIcon />
            </Stack>
          </CardContent>
        </MetricCard>
      </MetricsRow>

      {/* Charts Row */}
      <ChartsRow>
        {/* Monthly Revenue Trend */}
        <ChartCard>
          <CardContent sx={{ padding: "24px" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                Monthly Revenue Trend
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                Revenue and MRR growth over time
              </Typography>
            </Box>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
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
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: colors.baseWhite,
                      border: `1px solid ${colors.gray200}`,
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                    formatter={(value: number) => [formatCurrency(value), ""]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="mrr"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </ChartCard>

        {/* Revenue by Channel */}
        <ChartCard>
          <CardContent sx={{ padding: "24px" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                Revenue by Channel
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                Distribution of revenue across channels
              </Typography>
            </Box>
            <Box sx={{ height: 200, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Stack spacing={1}>
              {channelData.map((channel, index) => (
                <Stack key={index} direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: channel.color,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: colors.gray700, fontSize: "13px" }}>
                      {channel.name}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: colors.gray900, fontSize: "13px" }}>
                    {formatCurrency(channel.value)}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </ChartCard>
      </ChartsRow>

      {/* Bottom Row */}
      <BottomRow>
        {/* Top Products */}
        <ChartCard>
          <CardContent sx={{ padding: "24px" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                Top Products by Revenue
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                Best performing products and services
              </Typography>
            </Box>
            <Stack spacing={2}>
              {topProducts.map((product) => (
                <Box
                  key={product.rank}
                  sx={{
                    padding: "16px",
                    backgroundColor: colors.gray50,
                    borderRadius: "8px",
                    border: `1px solid ${colors.gray200}`,
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "6px",
                          backgroundColor: product.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: colors.baseWhite,
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        #{product.rank}
                      </Box>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: colors.gray900 }}>
                          {product.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px" }}>
                          {product.units.toLocaleString()} units sold
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        {formatCurrency(product.revenue)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: product.growth >= 0 ? colors.green600 : colors.error500,
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {product.growth >= 0 ? "↗" : "↘"} {formatPercentage(product.growth)}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </ChartCard>

        {/* Revenue Forecast */}
        <ChartCard>
          <CardContent sx={{ padding: "24px" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                Revenue Forecast
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                Predicted revenue for the next 3 months
              </Typography>
            </Box>
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Next Month Forecast
                </Typography>
                <Typography variant="body2" sx={{ color: colors.gray500, fontSize: "11px", mb: 1 }}>
                  Based on current trends
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: colors.blue600 }}>
                  $315,000
                </Typography>
                <Typography variant="body2" sx={{ color: colors.blue600, fontSize: "12px" }}>
                  +8.6% growth
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Q1 2025 Forecast
                </Typography>
                <Typography variant="body2" sx={{ color: colors.gray500, fontSize: "11px", mb: 1 }}>
                  Quarterly projection
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: colors.green600 }}>
                  $985,000
                </Typography>
                <Typography variant="body2" sx={{ color: colors.green600, fontSize: "12px" }}>
                  +12.3% growth
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                  Annual Run Rate
                </Typography>
                <Typography variant="body2" sx={{ color: colors.gray500, fontSize: "11px", mb: 1 }}>
                  Projected yearly revenue
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: colors.purple600 }}>
                  $3.8M
                </Typography>
                <Typography variant="body2" sx={{ color: colors.purple600, fontSize: "12px" }}>
                  +18.5% YoY
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </ChartCard>
      </BottomRow>

      {/* Revenue Health Score - Full Width */}
      <ChartCard sx={{ mt: 4 }}>
        <CardContent sx={{ padding: "24px" }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
              Revenue Health Score
            </Typography>
            <Typography variant="body2" sx={{ color: colors.gray600 }}>
              Overall assessment of revenue performance and trends
            </Typography>
          </Box>
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "24px",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
            }
          }}>
            <HealthScoreCard status="excellent">
              <Stack direction="row" alignItems="center" spacing={2}>
                <TrendIcon />
                <Box>
                  <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                    Growth Rate
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#10B981", mb: 0.5, fontSize: "18px" }}>
                    Excellent
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "11px" }}>
                    15.2% month-over-month
                  </Typography>
                </Box>
              </Stack>
            </HealthScoreCard>

            <HealthScoreCard status="strong">
              <Stack direction="row" alignItems="center" spacing={2}>
                <SyncIcon />
                <Box>
                  <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                    MRR Stability
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#3B82F6", mb: 0.5, fontSize: "18px" }}>
                    Strong
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "11px" }}>
                    Low churn, steady growth
                  </Typography>
                </Box>
              </Stack>
            </HealthScoreCard>

            <HealthScoreCard status="good">
              <Stack direction="row" alignItems="center" spacing={2}>
                <CustomerIcon />
                <Box>
                  <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                    Customer Value
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#F59E0B", mb: 0.5, fontSize: "18px" }}>
                    Good
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "11px" }}>
                    Room for improvement
                  </Typography>
                </Box>
              </Stack>
            </HealthScoreCard>
          </Box>
        </CardContent>
      </ChartCard>
    </DashboardContainer>
  );
};