import { Avatar, Box, Typography } from "@mui/material";
const Story = ({ name, imageUrl, id }) => {
  return (
    <Box
      sx={{
        padding: "15px 0",
        backgroundColor: "white.main",
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        width: "17.7%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Avatar />
      <Typography color="white.main" fontWeight="600">
        {name}
      </Typography>
    </Box>
  );
};

export default Story;
