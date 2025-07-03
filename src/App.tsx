
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import DefaultLayout from "./layout/DefaultLayout";
import { theme } from "./styles";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <DefaultLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
