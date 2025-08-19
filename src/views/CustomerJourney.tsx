import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  Tab,
  Tabs,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import { colors } from "../styles";
// Styled components matching the original design
const JourneyContainer = styled(Box)(() => ({
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

const FunnelCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  padding: "32px",
  marginBottom: "16px",
  transition: "all 0.2s ease",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
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

const MetricCard = styled(Box)(() => ({
  textAlign: "center",
  padding: "24px",
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  backgroundColor: colors.baseWhite,
  transition: "all 0.2s ease",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const IconContainer = styled(Box)(() => ({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#e6fffa",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 16px auto",
  fontSize: "24px",
}));

const GridContainer = styled(Box)(() => ({
  display: "grid",
  gap: "24px",
  marginBottom: "32px",
  gridTemplateColumns: "1fr",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

const TwoColumnGrid = styled(Box)(() => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr",
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "2fr 1fr",
  },
}));

const ThreeColumnGrid = styled(Box)(() => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

const MetricsGrid = styled(Box)(() => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr",
  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

// Icons
const LightningIcon = () => (
  <Box sx={{ width: "20px", height: "20px", color: "#F59E0B", fontSize: "16px" }}>⚡</Box>
);

const TrendUpIcon = () => (
  <Box sx={{ width: "16px", height: "16px", color: colors.green600, fontSize: "12px" }}>📈</Box>
);

const EmailIcon = () => (
  <Box sx={{ width: "16px", height: "16px", color: colors.blue500, fontSize: "12px" }}>📧</Box>
);

// Mock data
const funnelData = [
  { stage: "Awareness", users: 45000, rate: 12.5, time: "2m 34s", icon: "👁️", color: colors.green500 },
  { stage: "Interest", users: 5625, rate: 28.4, time: "4m 12s", icon: "👆", color: colors.blue500 },
  { stage: "Consideration", users: 1598, rate: 45.2, time: "8m 45s", icon: "🔍", color: colors.purple500 },
  { stage: "Purchase", users: 722, rate: 100, time: "3m 21s", icon: "🛒", color: colors.orange500 },
];

const conversionSequences = [
  {
    id: 1,
    path: "Meta Ads → Google Search → Email → Purchase",
    customers: 1247,
    revenue: 156497,
    conversionRate: 8.2,
    avgOrderValue: 125.5,
    timeToConvert: 7.2,
    revenueImpact: 32,
  },
  {
    id: 2,
    path: "Google Search → Meta Retargeting → Direct → Purchase",
    customers: 892,
    revenue: 126931,
    conversionRate: 12.1,
    avgOrderValue: 142.3,
    timeToConvert: 4.8,
    revenueImpact: 26,
  },
  {
    id: 3,
    path: "Email → Google Search → Purchase",
    customers: 634,
    revenue: 62608,
    conversionRate: 15.7,
    avgOrderValue: 98.75,
    timeToConvert: 2.1,
    revenueImpact: 13,
  },
];

const timeToConversionData = [
  { period: "0-1", conversions: 210 },
  { period: "2-3", conversions: 380 },
  { period: "4-7", conversions: 450 },
  { period: "8-14", conversions: 298 },
  { period: "15-30", conversions: 125 },
  { period: "30+", conversions: 67 },
];

const channelInteractionData = [
  { from: "Meta Ads", to: "Google Search", interactions: 2847, conversionRate: 12.3 },
  { from: "Google Search", to: "Email", interactions: 1923, conversionRate: 18.7 },
  { from: "Email", to: "Direct", interactions: 1456, conversionRate: 24.1 },
  { from: "Meta Ads", to: "Meta Retargeting", interactions: 1234, conversionRate: 15.8 },
  { from: "Google Ads", to: "Google Search", interactions: 987, conversionRate: 21.4 },
  { from: "Direct", to: "Purchase", interactions: 722, conversionRate: 100 },
];

const cohortData = [
  { week: "Week 1", newCustomers: 1200, returningCustomers: 0 },
  { week: "Week 2", newCustomers: 892, returningCustomers: 187 },
  { week: "Week 3", newCustomers: 756, returningCustomers: 234 },
  { week: "Week 4", newCustomers: 645, returningCustomers: 298 },
  { week: "Week 5", newCustomers: 578, returningCustomers: 356 },
  { week: "Week 6", newCustomers: 523, returningCustomers: 398 },
];

const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

export default function CustomerJourney() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <JourneyContainer>
      {/* Header */}
     
      {/* AI Suggestions */}
      <Box sx={{ mb: 4 }}>
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
                    Optimize Awareness to Interest
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
                  87.5% drop-off at awareness stage - improve ad relevance and landing pages
                </Typography>
                <Typography variant="body2" sx={{ color: colors.green600, fontWeight: 600 }}>
                  +2,250 potential customers
                </Typography>
              </Box>
              <ActionButton>Improve Targeting</ActionButton>
            </Stack>
          </ActionCard>

          <ActionCard>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
              <Box sx={{ flex: 1 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                  <EmailIcon />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                    Strengthen Email Sequences
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
                  Email touchpoints show highest conversion rates - expand email nurturing
                </Typography>
                <Typography variant="body2" sx={{ color: colors.green600, fontWeight: 600 }}>
                  +$45,000 potential revenue
                </Typography>
              </Box>
              <ActionButton>Expand Email</ActionButton>
            </Stack>
          </ActionCard>
        </Stack>
      </Box>

      {/* Customer Journey Funnel */}
      <FunnelCard>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
            Customer Journey Funnel
          </Typography>
          <Typography variant="body2" sx={{ color: colors.gray600 }}>
            User flow through awareness, interest, consideration, and purchase stages
          </Typography>
        </Box>

        <GridContainer>
          {funnelData.map((stage, index) => (
            <MetricCard key={stage.stage}>
              <IconContainer sx={{ backgroundColor: `${stage.color}20` }}>
                <Box sx={{ fontSize: "24px" }}>{stage.icon}</Box>
              </IconContainer>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                {stage.stage}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                {stage.users.toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                users
              </Typography>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: colors.gray900 }}>
                  {stage.rate}%
                </Typography>
                {index < funnelData.length - 1 && (
                  <Box sx={{ fontSize: "12px", color: colors.gray500 }}>→</Box>
                )}
              </Stack>
              <Typography variant="body2" sx={{ color: colors.gray600, mb: 1 }}>
                conversion rate
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: colors.gray700 }}>
                {stage.time}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                avg time
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 1 }}>
                  Top Channels:
                </Typography>
                {stage.stage === "Awareness" && (
                  <Stack spacing={0.5}>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Meta Ads</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Google Display</Typography>
                  </Stack>
                )}
                {stage.stage === "Interest" && (
                  <Stack spacing={0.5}>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Google Search</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Meta Retargeting</Typography>
                  </Stack>
                )}
                {stage.stage === "Consideration" && (
                  <Stack spacing={0.5}>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Email</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Direct</Typography>
                  </Stack>
                )}
                {stage.stage === "Purchase" && (
                  <Stack spacing={0.5}>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Direct</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>Email</Typography>
                  </Stack>
                )}
              </Box>
            </MetricCard>
          ))}
        </GridContainer>
      </FunnelCard>

      {/* Tabs Navigation */}
      <Box sx={{ mb: 3 }}>
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
          <Tab label="Top Sequences" />
          <Tab label="Conversion Timing" />
          <Tab label="Channel Interactions" />
          <Tab label="Cohort Analysis" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && (
        <Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
              Top Conversion Sequences
            </Typography>
            <Typography variant="body2" sx={{ color: colors.gray600 }}>
              Most common touchpoint paths that lead to conversions
            </Typography>
          </Box>

          <Stack spacing={2}>
            {conversionSequences.map((sequence, index) => (
              <ChartCard key={sequence.id}>
                <CardContent sx={{ padding: "24px" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                    <Box sx={{ flex: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray700, fontSize: "14px" }}>
                          #{index + 1}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                          {sequence.path}
                        </Typography>
                      </Stack>
                    </Box>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                          {sequence.customers.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px" }}>
                          customers
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                          {formatCurrency(sequence.revenue)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px" }}>
                          revenue
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>

                  <MetricsGrid>
                    <Box>
                      <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                        Conversion Rate
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        {sequence.conversionRate}%
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                        Avg Order Value
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        ${sequence.avgOrderValue}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                        Time to Convert
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        {sequence.timeToConvert} days
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px", mb: 0.5 }}>
                        Revenue Impact
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.green600 }}>
                        {sequence.revenueImpact}%
                      </Typography>
                    </Box>
                  </MetricsGrid>
                </CardContent>
              </ChartCard>
            ))}
          </Stack>
        </Box>
      )}

      {selectedTab === 1 && (
        <TwoColumnGrid>
          <ChartCard>
            <CardContent sx={{ padding: "24px" }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                  Time to Conversion Distribution
                </Typography>
                <Typography variant="body2" sx={{ color: colors.gray600 }}>
                  How long customers take to make their first purchase
                </Typography>
              </Box>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timeToConversionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="period" 
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
                      dataKey="conversions"
                      fill={colors.green500}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </ChartCard>
          
          <ChartCard>
            <CardContent sx={{ padding: "24px" }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                  Conversion Timeline Insights
                </Typography>
                <Typography variant="body2" sx={{ color: colors.gray600 }}>
                  Key metrics about customer conversion timing
                </Typography>
              </Box>
              
              <Stack spacing={3}>
                <Box>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Box sx={{ 
                      width: "40px", 
                      height: "40px", 
                      borderRadius: "50%", 
                      backgroundColor: colors.blue500 + "20",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px"
                    }}>
                      🕐
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        Average Time to Convert
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 0.5 }}>
                    5.8 days
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray600 }}>
                    Median: 4.2 days
                  </Typography>
                </Box>

                <Box>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Box sx={{ 
                      width: "40px", 
                      height: "40px", 
                      borderRadius: "50%", 
                      backgroundColor: colors.green500 + "20",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px"
                    }}>
                      📈
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        Fast Converters (0-3 days)
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 0.5 }}>
                    40.3%
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray600 }}>
                    Higher AOV: $142.30
                  </Typography>
                </Box>

                <Box>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Box sx={{ 
                      width: "40px", 
                      height: "40px", 
                      borderRadius: "50%", 
                      backgroundColor: colors.orange500 + "20",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px"
                    }}>
                      🎯
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        Long Cycle Customers
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: colors.gray900, mb: 0.5 }}>
                    11.5%
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray600 }}>
                    15+ days, need nurturing
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </ChartCard>
        </TwoColumnGrid>
      )}

      {selectedTab === 2 && (
        <Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
              Channel Interaction Flow
            </Typography>
            <Typography variant="body2" sx={{ color: colors.gray600 }}>
              How customers move between different marketing channels
            </Typography>
          </Box>

          <Stack spacing={2}>
            {channelInteractionData.map((interaction, index) => (
              <ChartCard key={index}>
                <CardContent sx={{ padding: "20px" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        {interaction.from}
                      </Typography>
                      <Box sx={{ fontSize: "16px", color: colors.gray500 }}>→</Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                        {interaction.to}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={4} alignItems="center">
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900 }}>
                          {interaction.interactions.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px" }}>
                          interactions
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.green600 }}>
                          {interaction.conversionRate}%
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.gray600, fontSize: "12px" }}>
                          conversion rate
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        width: "100px", 
                        height: "8px", 
                        backgroundColor: colors.gray200, 
                        borderRadius: "4px",
                        overflow: "hidden"
                      }}>
                        <Box sx={{
                          width: `${interaction.conversionRate}%`,
                          height: "100%",
                          backgroundColor: colors.green500,
                          borderRadius: "4px"
                        }} />
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </ChartCard>
            ))}
          </Stack>
        </Box>
      )}

      {selectedTab === 3 && (
        <Box>
          <Box sx={{ mb: 3 }}>
            <ChartCard>
              <CardContent sx={{ padding: "24px" }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 1 }}>
                    Customer Cohort Analysis
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray600 }}>
                    New vs returning customer behavior over time
                  </Typography>
                </Box>
                <Box sx={{ height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={cohortData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="week" 
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
                        labelFormatter={(label) => `Week: ${label}`}
                        formatter={(value, name) => [
                          value.toLocaleString(),
                          name === "newCustomers" ? "New Customers" : "Returning Customers"
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="newCustomers"
                        stackId="1"
                        stroke={colors.teal500}
                        fill={colors.teal500}
                        fillOpacity={0.8}
                      />
                      <Area
                        type="monotone"
                        dataKey="returningCustomers"
                        stackId="1"
                        stroke={colors.orange500}
                        fill={colors.orange500}
                        fillOpacity={0.8}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </ChartCard>
          </Box>

          <ThreeColumnGrid>
            <MetricCard>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 2 }}>
                Retention Rate
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                34.2%
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                customers return within 30 days
              </Typography>
            </MetricCard>

            <MetricCard>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 2 }}>
                Repeat Purchase Rate
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                28.7%
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                make a second purchase
              </Typography>
            </MetricCard>

            <MetricCard>
              <Typography variant="h6" sx={{ fontWeight: 600, color: colors.gray900, mb: 2 }}>
                Customer Lifetime Value
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 700, color: colors.gray900, mb: 1 }}>
                $287
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray600 }}>
                average over 12 months
              </Typography>
            </MetricCard>
          </ThreeColumnGrid>
        </Box>
      )}
    </JourneyContainer>
  );
}