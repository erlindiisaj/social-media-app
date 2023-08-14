import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";

import { userSignOut } from "../../utils/firebase/firebase.utils";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { Box, Divider, MenuList, Popover } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const SettingsMenu = () => {
  const user = useSelector(selectUser);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { photoURL, displayName } = user;
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = async (e) => {
    e.preventDefault();
    setAnchorElUser(null);
    const { id } = e.target;
    if (id === "Logout") {
      await userSignOut();
      navigate("/");
    }
    if (id === "Settings") {
      navigate("/settings");
    }
  };
  return (
    <>
      <Tooltip title="Open menu">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar src={photoURL} />
        </IconButton>
      </Tooltip>
      <Popover
        PaperProps={{ sx: { width: 200, borderRadius: "8px" } }}
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
        <Box
          sx={{
            px: "16px",
            py: "12px",
          }}
        >
          <Typography fontWeight={600} fontSize="12px" variant="overline">
            Account
          </Typography>
          <Typography color="text.secondary" variant="h4">
            {displayName}
          </Typography>
        </Box>
        <Divider />
        <MenuList
          disablePadding
          dense
          sx={{
            p: "8px",
            "& > *": {
              borderRadius: 1,
            },
          }}
        >
          <MenuItem
            sx={{ fontSize: "14px" }}
            id="Settings"
            onClick={handleCloseUserMenu}
          >
            <TuneRoundedIcon
              sx={{
                marginRight: "10px",
              }}
            />
            Settings
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "14px", textAlign: "center", width: "100%" }}
            id="Logout"
            onClick={handleCloseUserMenu}
          >
            <LogoutRoundedIcon
              sx={{
                marginRight: "10px",
              }}
            />
            Sign Out
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
};

export default SettingsMenu;
