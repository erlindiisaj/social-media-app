import { Avatar, Box, Typography } from "@mui/material";
import { userContext } from "../../contexts/user.context";
import { useContext } from "react";

const CurrentUser = () => {
  const { user } = useContext(userContext);
  const { photoURL, displayName } = user;
  return (
    <Box
      sx={{
        width: "auto",
        height: "80px",
        backgroundColor: "white.main",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
      }}
    >
      <Avatar src={photoURL} />
      <Box ml="10px">
        <Typography fontWeight="600">
          {displayName ? displayName : "User ID"}
        </Typography>
        <Typography color="gray.main">
          @{displayName ? displayName.toLowerCase() : "userid"}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrentUser;
