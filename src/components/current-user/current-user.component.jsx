import { Avatar, Box, IconButton, Typography } from "@mui/material";

const CurrentUser = () => {
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
      <IconButton>
        <Avatar />
      </IconButton>
      <Box ml="10px">
        <Typography fontWeight="600">Erlindi Isaj</Typography>
        <Typography color="gray.main">@erlindiisaj</Typography>
      </Box>
    </Box>
  );
};

export default CurrentUser;
