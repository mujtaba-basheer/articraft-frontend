import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { colors } from "../styles";
import { AIInsights } from "./AIInsights";
import { TopCampaigns } from "./TopCampaigns";
import { MetaAdsOverview } from "./MetaAdsOverview";
import { MetaSectionsOverview } from "./MetaSectionsOverview";
import { GoogleAdsOverview } from "./GoogleAdsOverview";
import { GoogleSectionsOverview } from "./GoogleSectionsOverview";

const AnalyticsContainer = styled(Box)(() => ({
  padding: "20px",
  backgroundColor: "#fafbfc",
  minHeight: "100%",
}));

const MetricCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  position: "relative",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const MetricsGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",
  marginBottom: "24px",
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
}));

// More dots icon component
const MoreDotsIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: colors.gray400 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </Box>
);

// Info icon component
const InfoIcon = () => (
  <Box
    component="svg"
    sx={{ width: 14, height: 14, color: colors.gray400 }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </Box>
);

// Arrow up icon
const ArrowUpIcon = ({ color = colors.green500 }: { color?: string }) => (
  <Box
    component="svg"
    sx={{ width: 12, height: 12, color }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  </Box>
);

// Arrow down icon
const ArrowDownIcon = ({ color = colors.error500 }: { color?: string }) => (
  <Box
    component="svg"
    sx={{ width: 12, height: 12, color }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </Box>
);

export const AnalyticsContent = () => {
  const analyticsMetrics = [
    // Row 1
    [
      {
        title: "Gross Sales",
        value: "$128,300",
        decimal: ".46",
        change: "+12.86%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Cost Per Purchase",
        value: "$33,400",
        decimal: "",
        change: "+4.3%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Net Return Value",
        value: "3.2",
        decimal: "x",
        change: "+8.3%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Cost Per Click",
        value: "569",
        decimal: "",
        change: "-3.47%",
        changeText: "in the past week",
        isPositive: false,
      },
    ],
    // Row 2
    [
      {
        title: "Click Through Rate",
        value: "$128,300",
        decimal: ".46",
        change: "+12.86%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Blended Ad Spend",
        value: "$33,400",
        decimal: "",
        change: "+4.3%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Blended ROAS",
        value: "3.2",
        decimal: "x",
        change: "+8.3%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Order Count",
        value: "569",
        decimal: "",
        change: "-3.47%",
        changeText: "in the past week",
        isPositive: false,
      },
    ],
    // Row 3
    [
      {
        title: "Total Number of Orders",
        value: "$128,300",
        decimal: ".46",
        change: "+12.86%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Conversion Rate",
        value: "$33,400",
        decimal: "",
        change: "+4.3%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "Average Order Value",
        value: "3.2",
        decimal: "x",
        change: "+8.3%",
        changeText: "in the past week",
        isPositive: true,
      },
      {
        title: "R.O.I",
        value: "569",
        decimal: "",
        change: "-3.47%",
        changeText: "in the past week",
        isPositive: false,
      },
    ],
  ];

  return (
    <AnalyticsContainer>
      {/* Render each row of metrics */}
      {analyticsMetrics.map((row, rowIndex) => (
        <MetricsGrid key={rowIndex}>
          {row.map((metric, index) => (
            <MetricCard key={index}>
              <CardContent sx={{ padding: "20px" }}>
                <Stack spacing={2}>
                  {/* Header */}
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: colors.gray600,
                        }}
                      >
                        {metric.title}
                      </Typography>
                      <InfoIcon />
                    </Stack>
                    <IconButton size="small" sx={{ color: colors.gray400 }}>
                      <MoreDotsIcon />
                    </IconButton>
                  </Stack>

                  {/* Value */}
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: colors.gray900,
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {metric.value}
                      <Box
                        component="span"
                        sx={{
                          fontSize: "24px",
                          color: colors.gray500,
                          fontWeight: 400,
                        }}
                      >
                        {metric.decimal}
                      </Box>
                    </Typography>
                  </Box>

                  {/* Change Indicator */}
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    {metric.isPositive ? (
                      <ArrowUpIcon color={colors.green500} />
                    ) : (
                      <ArrowDownIcon color={colors.error500} />
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: metric.isPositive ? colors.green600 : colors.error600,
                      }}
                    >
                      {metric.change}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "12px",
                        color: colors.gray500,
                      }}
                    >
                      {metric.changeText}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </MetricCard>
          ))}
        </MetricsGrid>
      ))}
      <AIInsights />
      <TopCampaigns />
      <MetaAdsOverview />
      <MetaSectionsOverview />
      <GoogleAdsOverview />
      <GoogleSectionsOverview />
    </AnalyticsContainer>
  );
};