import Navbar from "../../components/navbar/navbar.component";

import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box
      height={"100vh"}
      width={1}
      sx={{
        backgroundColor: "backgroundAccent.main",
      }}
    >
      <Navbar />
    </Box>
  );
};

export default Homepage;
