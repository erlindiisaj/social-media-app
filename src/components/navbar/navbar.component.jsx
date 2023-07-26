import { useState, useContext } from "react";
import { userContext } from "../../contexts/user.context";
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
import { userSignOut } from "../../utils/firebase/firebase.utils";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { user } = useContext(userContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const { photoURL } = user;
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = async (e) => {
    e.preventDefault();
    setAnchorElUser(null);
    if (e.target.id === "Logout") {
      await userSignOut();
      navigate("/");
    }
  };

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
          <Logo />
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar src={photoURL} />
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
