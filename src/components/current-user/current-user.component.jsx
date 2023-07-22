import { Avatar, Box, Typography } from "@mui/material";

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
      <Avatar />
      <Box ml="10px">
        <Typography fontWeight="600">Erlindi Isaj</Typography>
        <Typography color="gray.main">@erlindiisaj</Typography>
      </Box>
    </Box>
  );
};

export default CurrentUser;
