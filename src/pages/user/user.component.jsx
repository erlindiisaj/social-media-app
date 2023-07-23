import { Outlet, useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../../components/navbar/navbar.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Suggest from "../../components/suggest/suggest.component";
import Events from "../../components/events-container/events.component";
import CurrentUser from "../../components/current-user/current-user.component";
import RouteDisplay from "../../components/route-display/route-display.component";

const User = () => {
  const { page } = useParams();

  return (
    <Box
      width={1}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "backgroundAccent.main",
      }}
    >
      <Navbar />
      <Box
        width="100%"
        height="100%"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr 1fr",
          columnGap: "45px",
          padding: "20px 70px",
        }}
      >
        <Box
          sx={{
            gridColumn: "1/2",
          }}
        >
          <CurrentUser />
          <Sidebar />
        </Box>
        <RouteDisplay page={page} />
        <Box sx={{ gridColumn: "3/4" }}>
          <Suggest />
          <Events />
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default User;
