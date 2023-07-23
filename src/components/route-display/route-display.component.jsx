import Homepage from "../../routes/homepage/homepage.component";
import Profile from "../../routes/profile/profile.component";
import Newsfeed from "../../routes/newsfeed/newsfeed.component";
import Photos from "../../routes/photos/photos.component";
import WrongPath from "../wrong-path/wrong-path.component";

const RouteDisplay = ({ page }) => {
  switch (page) {
    case "home":
      return <Homepage />;
    case "profile":
      return <Profile />;
    case "newsfeed":
      return <Newsfeed />;
    case "photos":
      return <Photos />;
    default:
      return <WrongPath />;
  }
};

export default RouteDisplay;
