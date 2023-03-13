import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRoutes } from "../routes";
import { theme } from "../theme";

export function AppProviders() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ body: { height: "100vh" }, "#root": { height: "100%" } }}
      />
      <AppRoutes />
    </ThemeProvider>
  );
}
