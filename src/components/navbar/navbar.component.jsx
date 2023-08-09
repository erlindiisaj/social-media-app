import { useNavigate } from "react-router-dom";

import SettingsMenu from "../settings-menu/settings-menu.component";

import { ReactComponent as Logo } from "../../Images/horizontal-logo.svg";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledLogo,
} from "./navbar.styles";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="relative"
      style={{
        backgroundColor: "white",
        height: "90px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.14)",
      }}
    >
      <Container
        sx={{
          margin: "0 70px",
          padding: "0 !important",
        }}
        maxWidth="xl"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <StyledLogo>
            <Logo onClick={() => navigate("/user/home")} />
          </StyledLogo>
          <Box display={"flex"} alignItems="center" height="100%">
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="gray" />
              </SearchIconWrapper>
              <StyledInputBase
                color="gray"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <SettingsMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
