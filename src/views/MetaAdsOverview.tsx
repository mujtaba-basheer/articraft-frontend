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

const MetaAdsContainer = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  marginTop: "24px",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const MetaHeader = styled(Box)(() => ({
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

const MetaIcon = () => (
  <Box
    component="svg"
    sx={{ width: 20, height: 20, color: "#1877f2" }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </Box>
);

const metaAccounts = [
  {
    account: "Ad account 1",
    id: "ID: 1907654310",
    adAccounts: "$60",
    blendedSpend: "$6,068",
    blendedRevenue: "$190",
    blendedRoas: "5X",
    totalPurchases: 40,
    costPerPurchase: 88,
    conversionRate: "20%",
  },
  {
    account: "Ad account 2", 
    id: "ID: 1907654310",
    adAccounts: "$200",
    blendedSpend: "$6,068",
    blendedRevenue: "$190",
    blendedRoas: "5X",
    totalPurchases: 40,
    costPerPurchase: 88,
    conversionRate: "20%",
  },
];

const totalRow = {
  account: "Total",
  id: "",
  adAccounts: "$180",
  blendedSpend: "$600",
  blendedRevenue: "$570",
  blendedRoas: "5X",
  totalPurchases: 120,
  costPerPurchase: 58,
  conversionRate: "20%",
};

export const MetaAdsOverview = () => {
  return (
    <MetaAdsContainer>
      <MetaHeader>
        <Stack direction="row" alignItems="center" spacing={1}>
          <MetaIcon />
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: colors.gray900,
            }}
          >
            Meta Ads Overview
          </Typography>
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
          All data displayed is live and updated as of today.
        </Typography>
      </MetaHeader>

      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ad Accounts</TableCell>
              <TableCell align="right">Blended Spend</TableCell>
              <TableCell align="right">Blended Revenue</TableCell>
              <TableCell align="right">Blended ROAS</TableCell>
              <TableCell align="right">Total Purchases</TableCell>
              <TableCell align="right">Cost per Purchase</TableCell>
              <TableCell align="right">Conversion Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {metaAccounts.map((account, index) => (
              <TableRow key={index}>
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
            
            {/* Total Row */}
            <TableRow sx={{ backgroundColor: colors.gray50 }}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: colors.gray900,
                  }}
                >
                  {totalRow.account}
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
                  {totalRow.blendedSpend}
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
                  {totalRow.blendedRevenue}
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
                  {totalRow.blendedRoas}
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
                  {totalRow.totalPurchases}
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
                  {totalRow.costPerPurchase}
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
                  {totalRow.conversionRate}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
    </MetaAdsContainer>
  );
};