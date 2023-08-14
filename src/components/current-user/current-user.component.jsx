import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";

import { Avatar, Box, Typography } from "@mui/material";

const CurrentUser = () => {
  const user = useSelector(selectUser);
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
      <Box ml={1}>
        <Typography fontWeight="600">
          {displayName ? displayName : "User ID"}
        </Typography>
        <Typography color="gray.main">
          @
          {displayName
            ? displayName.split(" ").join("").toLowerCase()
            : "userid"}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrentUser;
