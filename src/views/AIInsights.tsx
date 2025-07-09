import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { colors } from "../styles";

const AIInsightsContainer = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  marginTop: "24px",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const InsightCard = styled(Box)(() => ({
  padding: "16px",
  borderRadius: "8px",
  border: `1px solid ${colors.gray200}`,
  backgroundColor: colors.gray25,
  marginBottom: "16px",
  "&:last-child": {
    marginBottom: 0,
  },
}));

const InsightHeader = styled(Box)(() => ({
  padding: "20px 20px 16px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${colors.gray200}`,
}));

// Arrow up icon for positive insights
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

// Arrow down icon for negative insights
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

// Lightning icon for AI Insights
const LightningIcon = () => (
  <Box
    component="svg"
    sx={{ width: 16, height: 16, color: "currentColor" }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
  </Box>
);

const insights = [
  {
    title: "Increase Meta Ads Budget",
    description: "Your Meta retargeting campaign has a 4.67 ROAS. Consider increasing budget by 25%.",
    impact: "+$3,200 potential revenue",
    type: "positive",
    isPositive: true,
  },
  {
    title: "Google Shopping Underperforming",
    description: "Shopping ads ROAS dropped 15% this week. Review product feed and bidding strategy.",
    impact: "-$1800 lost revenue",
    type: "negative",
    isPositive: false,
  },
  {
    title: "Increase Meta Ads Budget",
    description: "Your Meta retargeting campaign has a 4.67 ROAS. Consider increasing budget by 25%.",
    impact: "+$3,200 potential revenue",
    type: "positive",
    isPositive: true,
  },
];

export const AIInsights = () => {
  const handleViewAllInsights = () => {
    console.log("Opening all AI insights...");
  };

  return (
    <AIInsightsContainer>
      <InsightHeader>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LightningIcon />
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: colors.gray900,
            }}
          >
            AI Powered Insights
          </Typography>
        </Stack>
        <Button
          onClick={handleViewAllInsights}
          sx={{
            height: "36px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "none",
            padding: "8px 16px",
            backgroundColor: colors.blue500,
            color: colors.baseWhite,
            border: `1px solid ${colors.blue500}`,
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            "&:hover": {
              backgroundColor: colors.blue600,
              border: `1px solid ${colors.blue600}`,
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
          startIcon={<LightningIcon />}
        >
          View all insights
        </Button>
      </InsightHeader>

      <CardContent sx={{ padding: "20px" }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            color: colors.gray600,
            marginBottom: "20px",
            lineHeight: 1.5,
          }}
        >
          Smart recommendations to optimize your performance
        </Typography>

        <Stack spacing={2}>
          {insights.map((insight, index) => (
            <InsightCard key={index}>
              <Stack spacing={2}>
                {/* Insight Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: colors.gray900,
                    lineHeight: 1.3,
                  }}
                >
                  {insight.title}
                </Typography>

                {/* Insight Description */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "13px",
                    color: colors.gray600,
                    lineHeight: 1.4,
                  }}
                >
                  {insight.description}
                </Typography>

                {/* Impact Indicator */}
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  {insight.isPositive ? (
                    <ArrowUpIcon color={colors.green500} />
                  ) : (
                    <ArrowDownIcon color={colors.error500} />
                  )}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: insight.isPositive ? colors.green600 : colors.error600,
                    }}
                  >
                    {insight.impact}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "13px",
                      color: colors.gray500,
                    }}
                  >
                    with this change
                  </Typography>
                </Stack>
              </Stack>
            </InsightCard>
          ))}
        </Stack>
      </CardContent>
    </AIInsightsContainer>
  );
};