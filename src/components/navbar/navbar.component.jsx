import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import SettingsMenu from "../settings-menu/settings-menu.component";

import { ReactComponent as Logo } from "../../Images/horizontal-logo.svg";
import { ReactComponent as LogoWhite } from "../../Images/horizontal-logo-white.svg";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledLogo,
} from "./navbar.styles";
import { ColorModeContext } from "../../theme";
import { IconButton, Tooltip } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const { mode, setMode } = useContext(ColorModeContext);

  const changeColorMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  return (
    <AppBar
      position="relative"
      sx={{
        backgroundImage: "none",
        backgroundColor: "white.main",
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
            {mode === "dark" ? (
              <LogoWhite onClick={() => navigate("/user/home")} />
            ) : (
              <Logo onClick={() => navigate("/user/home")} />
            )}
          </StyledLogo>
          <Box display={"flex"} alignItems="center" height="100%">
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="gray" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Tooltip title="Color mode">
              <IconButton onClick={changeColorMode}>
                {mode === "light" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </Tooltip>
            <SettingsMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
