import { Box, Typography } from "@mui/material";
import { ReactComponent as ProfileSVG } from "../../Images/user.svg";
import { ReactComponent as HomeSVG } from "../../Images/home.svg";
import { ReactComponent as NewsfeedSVG } from "../../Images/newsfeed.svg";
import "./sidebar.styles.scss";
import { ReactComponent as PhotoSVG } from "../../Images/photos.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Sidebar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const StyledLink = styled(Link)`
    border: 1px solid red;
    width: 100%;
    height: 100%;
  `;

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
          verticalAlign="middle"
          onClick={handleClick}
          id="home"
          className=" active sidebar-link"
        >
          <HomeSVG />
          <StyledLink to="/user">Home</StyledLink>
        </Box>
        <Box onClick={handleClick} id="profile" className="sidebar-link">
          <ProfileSVG />
          <StyledLink to={"profile"}>Profile</StyledLink>
        </Box>
        <Box onClick={handleClick} className=" sidebar-link">
          <NewsfeedSVG />
          <StyledLink to={"newsfeed"}>News Feed</StyledLink>
        </Box>
        <Box onClick={handleClick} className="last sidebar-link ">
          <PhotoSVG />
          <StyledLink to={"photos"}>Photos</StyledLink>
        </Box>
      </div>
    </Box>
  );
};

export default Sidebar;
