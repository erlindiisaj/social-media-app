import { Box, Typography } from "@mui/material";
import { ReactComponent as ProfileSVG } from "../../Images/user.svg";
import { ReactComponent as HomeSVG } from "../../Images/home.svg";
import { ReactComponent as NewsfeedSVG } from "../../Images/newsfeed.svg";
import "./sidebar.styles.scss";
import { ReactComponent as PhotoSVG } from "../../Images/photos.svg";

const Sidebar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="sidebar-container">
      <Box onClick={handleClick} id="profile" className="sidebar-link">
        <ProfileSVG />
        <Typography ml={2} variant="h5" fontWeight="600" color="black.light">
          Profile
        </Typography>
      </Box>
      <Box onClick={handleClick} id="home" className=" active sidebar-link">
        <HomeSVG />
        <Typography ml={2} variant="h5" fontWeight="600" color="black.light">
          Home
        </Typography>
      </Box>
      <Box onClick={handleClick} className=" sidebar-link">
        <NewsfeedSVG />
        <Typography ml={2} variant="h5" fontWeight="600" color="black.light">
          News Feed
        </Typography>
      </Box>
      <Box onClick={handleClick} className="last sidebar-link ">
        <PhotoSVG />
        <Typography ml={2} variant="h5" fontWeight="600" color="black.light">
          Photos
        </Typography>
      </Box>
    </div>
  );
};

export default Sidebar;
