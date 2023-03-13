import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import { MainAppBar } from "../appbars/main-appbar.component";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box>
      <MainAppBar />
      {children}
    </Box>
  );
}
