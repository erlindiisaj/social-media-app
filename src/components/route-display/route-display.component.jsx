import { useParams } from "react-router-dom";
import Homepage from "../../routes/homepage/homepage.component";
import Profile from "../../routes/profile/profile.component";
import Newsfeed from "../../routes/newsfeed/newsfeed.component";
import Photos from "../../routes/photos/photos.component";

const RouteDisplay = () => {
  const { page } = useParams();

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
      <Homepage />;
  }
};

export default RouteDisplay;
