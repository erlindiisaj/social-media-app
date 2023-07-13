import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../Images/horizontal-logo.svg";
import { Search, SearchIconWrapper, StyledInputBase } from "./navbar.styles";

import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (e) => {
    e.preventDefault();
    setAnchorElUser(null);
    if (e.target.id === "Logout") {
      navigate("/auth");
    }
  };

  return (
    <AppBar
      style={{
        backgroundColor: "white",
        height: "90px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          margin: "0 70px 0 70px",
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
          <Logo />
          <Box display={"flex"} height="40px">
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  onClick={handleCloseUserMenu}
                  id={setting}
                  key={setting}
                >
                  <Typography id={setting} textAlign="center">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
