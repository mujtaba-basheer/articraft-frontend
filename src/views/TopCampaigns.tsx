import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { colors } from "../styles";

const TopCampaignsContainer = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  marginTop: "24px",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const CampaignHeader = styled(Box)(() => ({
  padding: "20px 20px 16px 20px",
  borderBottom: `1px solid ${colors.gray200}`,
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
        "&:last-child": {
          paddingRight: "20px",
        },
        "&:first-of-type": {
          paddingLeft: "20px",
        },
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

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === "Meta") {
    return (
      <Box
        component="svg"
        sx={{ width: 20, height: 20, color: "#1877f2" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </Box>
    );
  } else {
    return (
      <Box
        component="svg"
        sx={{ width: 20, height: 20 }}
        viewBox="0 0 24 24"
      >
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </Box>
    );
  }
};

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

const campaigns = [
  {
    name: "Summer Sale - Meta Ads",
    platform: "Meta",
    adSpend: 200,
    revenue: 6068,
    roas: "3.63x",
    conversions: 6068,
    cpc: 6.068,
  },
  {
    name: "Brand Keywords - Google Ads", 
    platform: "Google",
    adSpend: 231.26,
    revenue: 5839,
    roas: "4.00x",
    conversions: 5839,
    cpc: 5.839,
  },
  {
    name: "Retargeting - Meta Ads",
    platform: "Meta", 
    adSpend: 268.23,
    revenue: 4928,
    roas: "4.67x",
    conversions: 4928,
    cpc: 4.928,
  },
  {
    name: "Shopping Ads - Google Ads",
    platform: "Google",
    adSpend: 76.05,
    revenue: 3854,
    roas: "2.73x", 
    conversions: 3854,
    cpc: 3.854,
  },
  {
    name: "Winter Sale - Meta Ads",
    platform: "Meta",
    adSpend: 122.67,
    revenue: 3589,
    roas: "4.67x",
    conversions: 3589,
    cpc: 3.589,
  },
  {
    name: "Shopping Ads - Google Ads",
    platform: "Google", 
    adSpend: 73.87,
    revenue: 2894,
    roas: "4.00x",
    conversions: 2894,
    cpc: 2.894,
  },
];

export const TopCampaigns = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDecimal = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <TopCampaignsContainer>
      <CampaignHeader>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: colors.gray900,
            }}
          >
            Top Campaigns
          </Typography>
          <InfoIcon />
        </Stack>
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            color: colors.gray600,
            marginTop: "4px",
            lineHeight: 1.5,
          }}
        >
          Performance overview of your best campaigns
        </Typography>
      </CampaignHeader>

      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Campaign Name</TableCell>
              <TableCell align="right">Ad Spend</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">ROAS</TableCell>
              <TableCell align="right">Conversions</TableCell>
              <TableCell align="right">CPC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns.map((campaign, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <PlatformIcon platform={campaign.platform} />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: colors.gray900,
                      }}
                    >
                      {campaign.name}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: colors.gray700,
                    }}
                  >
                    {formatCurrency(campaign.adSpend)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: colors.gray700,
                    }}
                  >
                    {formatCurrency(campaign.revenue)}
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
                    {campaign.roas}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: colors.gray700,
                    }}
                  >
                    {campaign.conversions.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: colors.gray700,
                    }}
                  >
                    {formatDecimal(campaign.cpc)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </TopCampaignsContainer>
  );
};