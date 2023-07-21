import { useState } from "react";
import { Box } from "@mui/material";
import { ReactComponent as ProfileSVG } from "../../Images/user.svg";
import { ReactComponent as HomeSVG } from "../../Images/home.svg";
import { ReactComponent as NewsfeedSVG } from "../../Images/newsfeed.svg";
import "./sidebar.styles.scss";
import { ReactComponent as PhotoSVG } from "../../Images/photos.svg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isActive, setIsActive] = useState({
    home: true,
    profile: false,
    newsfeed: false,
    photos: false,
  });

  const handleClick = (e) => {
    const clickedElement = e.currentTarget.id;
    const updatedData = { ...isActive };
    for (const key in updatedData) {
      updatedData[key] = false;
    }
    setIsActive({
      ...updatedData,
      [clickedElement]: true,
    });
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
        height: "220px",
        backgroundColor: "white.main",
        borderRadius: "12px",
      }}
    >
      <div className="sidebar-container">
        <Box
          onClick={handleClick}
          id="home"
          className={isActive.home ? "active sidebar-link" : "sidebar-link"}
        >
          <Link to="home">
            {" "}
            <HomeSVG />
            Home
          </Link>
        </Box>
        <Box
          onClick={handleClick}
          id="profile"
          className={isActive.profile ? "active sidebar-link" : "sidebar-link"}
        >
          <Link to={"profile"}>
            {" "}
            <ProfileSVG />
            Profile
          </Link>
        </Box>
        <Box
          id="newsfeed"
          onClick={handleClick}
          className={isActive.newsfeed ? "active sidebar-link" : "sidebar-link"}
        >
          <Link to={"newsfeed"}>
            {" "}
            <NewsfeedSVG />
            News Feed
          </Link>
        </Box>
        <Box
          id="photos"
          onClick={handleClick}
          className={isActive.photos ? "active sidebar-link" : "sidebar-link"}
        >
          <Link to={"photos"}>
            {" "}
            <PhotoSVG />
            Photos
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default Sidebar;