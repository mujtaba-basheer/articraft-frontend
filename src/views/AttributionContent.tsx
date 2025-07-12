import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { colors } from "../styles";
import {  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useState } from 'react';

const AttributionContainer = styled(Box)(() => ({
  padding: "20px",
  backgroundColor: "#fafbfc",
  minHeight: "100%",
}));

const MetricCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const ChartCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  height: "400px",
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

const ChartsContainer = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "24px",
  marginBottom: "24px",
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "1fr",
  },
}));

const ModelSelector = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
  marginBottom: "24px",
  flexWrap: "wrap",
}));

const ModelChip = styled(Chip)<{ selected?: boolean }>(({ selected }) => ({
  height: "36px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 500,
  backgroundColor: selected ? colors.blue500 : colors.baseWhite,
  color: selected ? colors.baseWhite : colors.gray700,
  border: `1px solid ${selected ? colors.blue500 : colors.gray300}`,
  "&:hover": {
    backgroundColor: selected ? colors.blue600 : colors.gray50,
  },
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  "& .MuiTable-root": {
    "& .MuiTableHead-root": {
      "& .MuiTableCell-root": {
        backgroundColor: colors.gray50,
        borderBottom: `1px solid ${colors.gray200}`,
        fontSize: "12px",
        fontWeight: 600,
        color: colors.gray600,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        padding: "12px 16px",
      },
    },
    "& .MuiTableBody-root": {
      "& .MuiTableCell-root": {
        borderBottom: `1px solid ${colors.gray100}`,
        fontSize: "14px",
        color: colors.gray700,
        padding: "16px",
      },
      "& .MuiTableRow-root": {
        "&:hover": {
          backgroundColor: colors.gray25,
        },
        "&:last-child .MuiTableCell-root": {
          borderBottom: "none",
        },
      },
    },
  },
}));

// Sample data for attribution models performance
const attributionData = [
  { model: 'First Click', conversions: 1250, revenue: 125000, weight: 0.15 },
  { model: 'Last Click', conversions: 2100, revenue: 210000, weight: 0.35 },
  { model: 'Linear', conversions: 1800, revenue: 180000, weight: 0.25 },
  { model: 'Time Decay', conversions: 1650, revenue: 165000, weight: 0.20 },
  { model: 'Position Based', conversions: 1920, revenue: 192000, weight: 0.30 },
];

// Sample data for customer journey
const journeyData = [
  { step: 'Awareness', sessions: 10000, conversions: 150 },
  { step: 'Interest', sessions: 5000, conversions: 300 },
  { step: 'Consideration', sessions: 2500, conversions: 450 },
  { step: 'Purchase', sessions: 1000, conversions: 800 },
  { step: 'Retention', sessions: 500, conversions: 400 },
];

// Sample data for touchpoint analysis
const touchpointData = [
  {
    touchpoint: "Google Ads",
    firstTouch: 1250,
    lastTouch: 980,
    linearAttribution: 1100,
    timeDecay: 1050,
    assisted: 2100,
    revenue: 110000,
  },
  {
    touchpoint: "Facebook Ads",
    firstTouch: 890,
    lastTouch: 1200,
    linearAttribution: 950,
    timeDecay: 1100,
    assisted: 1850,
    revenue: 95000,
  },
  {
    touchpoint: "Email Marketing",
    firstTouch: 450,
    lastTouch: 650,
    linearAttribution: 520,
    timeDecay: 580,
    assisted: 1200,
    revenue: 52000,
  },
  {
    touchpoint: "Organic Search",
    firstTouch: 1100,
    lastTouch: 750,
    linearAttribution: 890,
    timeDecay: 820,
    assisted: 1650,
    revenue: 82000,
  },
  {
    touchpoint: "Direct",
    firstTouch: 320,
    lastTouch: 1480,
    linearAttribution: 680,
    timeDecay: 950,
    assisted: 800,
    revenue: 95000,
  },
];

export const AttributionContent = () => {
  const [selectedModel, setSelectedModel] = useState("Last Click");

  const attributionMetrics = [
    {
      title: "Total Conversions",
      value: "2,847",
      change: "+12.3%",
      changeText: "vs previous period",
      isPositive: true,
    },
    {
      title: "Attribution Revenue",
      value: "$284,700",
      change: "+8.7%", 
      changeText: "vs previous period",
      isPositive: true,
    },
    {
      title: "Avg. Path Length",
      value: "4.2",
      change: "-2.1%",
      changeText: "vs previous period", 
      isPositive: false,
    },
    {
      title: "Time to Convert",
      value: "12.5 days",
      change: "+5.4%",
      changeText: "vs previous period",
      isPositive: false,
    },
  ];

  const models = ["First Click", "Last Click", "Linear", "Time Decay", "Position Based"];

  return (
    <AttributionContainer>
      {/* Attribution Model Selector */}
      <Box sx={{ marginBottom: "24px" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: colors.gray900,
            marginBottom: "12px",
          }}
        >
          Attribution Models
        </Typography>
        <ModelSelector>
          {models.map((model) => (
            <ModelChip
              key={model}
              label={model}
              selected={selectedModel === model}
              onClick={() => setSelectedModel(model)}
              clickable
            />
          ))}
        </ModelSelector>
      </Box>

      {/* Attribution Metrics */}
      <MetricsGrid>
        {attributionMetrics.map((metric, index) => (
          <MetricCard key={index}>
            <CardContent sx={{ padding: "20px" }}>
              <Stack spacing={2}>
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
                
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: colors.gray900,
                    lineHeight: 1,
                  }}
                >
                  {metric.value}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1}>
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

      {/* Charts Section */}
      <ChartsContainer>
        {/* Customer Journey Chart */}
        <ChartCard>
          <Box sx={{ padding: "20px 20px 0 20px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: colors.gray900,
                marginBottom: "16px",
              }}
            >
              Customer Journey Funnel
            </Typography>
          </Box>
          <Box sx={{ padding: "0 20px 20px 20px", height: "320px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={journeyData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke={colors.gray200} />
                <XAxis type="number" />
                <YAxis dataKey="step" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="sessions" fill={colors.blue300} name="Sessions" />
                <Bar dataKey="conversions" fill={colors.blue500} name="Conversions" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </ChartCard>

        {/* Attribution Model Comparison */}
        <ChartCard>
          <Box sx={{ padding: "20px 20px 0 20px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: colors.gray900,
                marginBottom: "16px",
              }}
            >
              Model Comparison
            </Typography>
          </Box>
          <Box sx={{ padding: "0 20px 20px 20px", height: "320px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.gray200} />
                <XAxis dataKey="model" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="conversions" fill={colors.green500} name="Conversions" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </ChartCard>
      </ChartsContainer>

      {/* Touchpoint Analysis Table */}
      <MetricCard>
        <Box sx={{ padding: "20px 20px 16px 20px", borderBottom: `1px solid ${colors.gray200}` }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: colors.gray900,
            }}
          >
            Touchpoint Attribution Analysis
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: colors.gray600,
              marginTop: "4px",
            }}
          >
            Compare how different attribution models credit each touchpoint
          </Typography>
        </Box>
        
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Touchpoint</TableCell>
                <TableCell align="right">First Touch</TableCell>
                <TableCell align="right">Last Touch</TableCell>
                <TableCell align="right">Linear</TableCell>
                <TableCell align="right">Time Decay</TableCell>
                <TableCell align="right">Assisted Conv.</TableCell>
                <TableCell align="right">Revenue</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {touchpointData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: colors.gray900,
                      }}
                    >
                      {row.touchpoint}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "14px", color: colors.gray700 }}>
                      {row.firstTouch.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "14px", color: colors.gray700 }}>
                      {row.lastTouch.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "14px", color: colors.gray700 }}>
                      {row.linearAttribution.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "14px", color: colors.gray700 }}>
                      {row.timeDecay.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "14px", color: colors.gray700 }}>
                      {row.assisted.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: colors.gray900,
                      }}
                    >
                      ${(row.revenue / 1000).toFixed(0)}k
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </MetricCard>
    </AttributionContainer>
  );
};