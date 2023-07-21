import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import Suggest from "../../components/suggest/suggest.component";
import Events from "../../components/events/events.component";
import Homepage from "../homepage/homepage.component";
import Profile from "../profile/profile.component";
import Newsfeed from "../newsfeed/newsfeed.component";
import Photos from "../photos/photos.component";

import { useEffect } from "react";
import CurrentUser from "../../components/current-user/current-user.component";

const User = () => {
  const { page } = useParams();
  useEffect(() => {
    console.log(page);
  });
  return (
    <Box
      height={"100%"}
      width={1}
      sx={{
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
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>

        <Box sx={{ gridColumn: "3/4" }}>
          <Suggest />
          <Events />
        </Box>
      </Box>
    </Box>
  );
};

export default User;
