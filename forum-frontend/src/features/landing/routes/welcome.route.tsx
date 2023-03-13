import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { MainLayout } from "../../../components/layouts/main-layout.component";

const StyledDiv = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: "red",
}));

export function WelcomeRoute() {
  return (
    <MainLayout>
      <StyledDiv>
        <Typography variant="h1">ahoooj</Typography>
      </StyledDiv>
    </MainLayout>
  );
}
