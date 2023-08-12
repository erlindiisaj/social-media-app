import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Box } from "@mui/material";
import { SidebarLinkContainer, SidebarLink } from "./sidebar.styles";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";

import "./sidebar.styles.scss";

const Sidebar = () => {
  const { page } = useParams();

  const [isActive, setIsActive] = useState({
    home: false,
    profile: false,
    newsfeed: false,
    photos: false,
  });

  useEffect(() => {
    const clickedElement = page;
    const updatedData = { ...isActive };
    for (const key in updatedData) {
      updatedData[key] = false;
    }
    setIsActive({
      ...updatedData,
      [clickedElement]: true,
    });
  }, [page]);

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
        <SidebarLinkContainer
          onClick={handleClick}
          id="home"
          className={isActive.home ? "active " : ""}
        >
          <SidebarLink to="home">
            {" "}
            <HomeRoundedIcon
              sx={{
                width: "30px",
                height: "30px",
                margin: "0 20px 0 20px",
                color: "black.light",
              }}
            />
            Home
          </SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer
          onClick={handleClick}
          id="profile"
          className={isActive.profile ? "active " : ""}
        >
          <SidebarLink to={"profile"}>
            {" "}
            <PersonIcon
              sx={{
                width: "30px",
                height: "30px",
                margin: "0 20px 0 20px",
                color: "black.light",
              }}
            />
            Profile
          </SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer
          id="newsfeed"
          onClick={handleClick}
          className={isActive.newsfeed ? "active " : ""}
        >
          <SidebarLink to={"newsfeed"}>
            {" "}
            <ArticleIcon
              sx={{
                width: "30px",
                height: "30px",
                margin: "0 20px 0 20px",
                color: "black.light",
              }}
            />
            News Feed
          </SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer
          id="photos"
          onClick={handleClick}
          className={isActive.photos ? "active " : ""}
        >
          <SidebarLink to={"photos"}>
            {" "}
            <InsertPhotoRoundedIcon
              sx={{
                width: "30px",
                height: "30px",
                margin: "0 20px 0 20px",
                color: "black.light",
              }}
            />
            Photos
          </SidebarLink>
        </SidebarLinkContainer>
      </div>
    </Box>
  );
};

export default Sidebar;
