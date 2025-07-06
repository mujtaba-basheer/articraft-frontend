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

const GoogleAdsContainer = styled(Card)(() => ({
  borderRadius: "12px",
  border: `1px solid ${colors.gray200}`,
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
  backgroundColor: colors.baseWhite,
  marginTop: "24px",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

const GoogleHeader = styled(Box)(() => ({
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

const googleAccounts = [
  {
    account: "Turtledove London",
    id: "ID: 1907654310",
    spends: "$60",
    cpc: "$200",
    pMaxble: "$190",
    revenue: "5X",
    roas: 40,
  },
  {
    account: "Search Overview",
    id: "",
    spends: "$200",
    cpc: "$6,068",
    pMaxble: "$190",
    revenue: "5X",
    roas: 40,
  },
  {
    account: "Performance Max Overview",
    id: "",
    spends: "$200",
    cpc: "$6,068",
    pMaxble: "$190",
    revenue: "5X",
    roas: 40,
  },
];

const totalRow = {
  account: "Total",
  id: "",
  spends: "$180",
  cpc: "$600",
  pMaxble: "$570",
  revenue: "5X",
  roas: 120,
};

export const GoogleAdsOverview = () => {
  return (
    <GoogleAdsContainer>
      <GoogleHeader>
        <Stack direction="row" alignItems="center" spacing={1}>
          <GoogleIcon />
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: colors.gray900,
            }}
          >
            Google Ads Overview
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
      </GoogleHeader>

      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ad Accounts</TableCell>
              <TableCell align="right">Spends</TableCell>
              <TableCell align="right">CPC</TableCell>
              <TableCell align="right">P-Maxble</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">ROAS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {googleAccounts.map((account, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: colors.gray900,
                        marginBottom: account.id ? "2px" : 0,
                      }}
                    >
                      {account.account}
                    </Typography>
                    {account.id && (
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: colors.gray500,
                        }}
                      >
                        {account.id}
                      </Typography>
                    )}
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
                    {account.spends}
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
                    {account.cpc}
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
                    {account.pMaxble}
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
                    {account.revenue}
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
                    {account.roas}
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
                  {totalRow.spends}
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
                  {totalRow.cpc}
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
                  {totalRow.pMaxble}
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
                  {totalRow.revenue}
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
                  {totalRow.roas}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
    </GoogleAdsContainer>
  );
};