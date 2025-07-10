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

const GoogleSectionsContainer = styled(Box)(() => ({
  marginTop: "24px",
}));

const SectionCard = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  marginBottom: "24px",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  "&:last-child": {
    marginBottom: 0,
  },
}));

const SectionHeader = styled(Box)(() => ({
  padding: "16px 20px",
  backgroundColor: "#f0f9ff",
  borderBottom: `1px solid #bae6fd`,
  borderRadius: "12px 12px 0 0",
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

const GoogleIcon = () => (
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

const googleSections = [
  // Google Search Overview Section
  {
    title: "Google Search Overview",
    accounts: [
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
    ]
  },
  // Google Top Performing Keywords Section
  {
    title: "Google Top Performing Keywords",
    accounts: [
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
    ]
  },
  // Google Performance Max Overview Section
  {
    title: "Google Performance Max Overview",
    accounts: [
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
    ]
  },
  // Google Ad Quality Section
  {
    title: "Google Ad Quality",
    accounts: [
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 1",
        id: "ID: 1907654310",
        blendedSpend: "$60",
        blendedRevenue: "$200",
        ecomRevenue: "$190",
        blendedRoas: "5X",
        totalPurchases: 40,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
      {
        account: "Ad account 2",
        id: "ID: 1907654310",
        blendedSpend: "$180",
        blendedRevenue: "$600",
        ecomRevenue: "$570",
        blendedRoas: "5X",
        totalPurchases: 120,
        costPerPurchase: 58,
        conversionRate: "20%",
      },
    ]
  },
];

export const GoogleSectionsOverview = () => {
  return (
    <GoogleSectionsContainer>
      {googleSections.map((section, sectionIndex) => (
        <SectionCard key={sectionIndex}>
          {/* Section Header */}
          <SectionHeader>
            <Stack direction="row" alignItems="center" spacing={1}>
              <GoogleIcon />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#0369a1",
                }}
              >
                {section.title}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: "12px",
                color: colors.gray600,
                marginTop: "4px",
              }}
            >
              All data displayed is live and updated as of today.
            </Typography>
          </SectionHeader>

          {/* Section Table */}
          <StyledTableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ad Accounts</TableCell>
                  <TableCell align="right">Blended Spend</TableCell>
                  <TableCell align="right">Blended Revenue</TableCell>
                  <TableCell align="right">ECOM Revenue</TableCell>
                  <TableCell align="right">Blended ROAS</TableCell>
                  <TableCell align="right">Total Purchases</TableCell>
                  <TableCell align="right">Cost per Purchase</TableCell>
                  <TableCell align="right">Conversion Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {section.accounts.map((account, accountIndex) => (
                  <TableRow key={`${sectionIndex}-${accountIndex}`}>
                    <TableCell>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: colors.gray900,
                            marginBottom: "2px",
                          }}
                        >
                          {account.account}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: colors.gray500,
                          }}
                        >
                          {account.id}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: colors.gray700,
                        }}
                      >
                        {account.blendedSpend}
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
                        {account.blendedRevenue}
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
                        {account.ecomRevenue}
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
                        {account.blendedRoas}
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
                        {account.totalPurchases}
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
                        {account.costPerPurchase}
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
                        {account.conversionRate}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        </SectionCard>
      ))}
    </GoogleSectionsContainer>
  );
};