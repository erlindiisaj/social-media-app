import { useParams } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage.component";
import Profile from "../../pages/profile/profile.component";
import Newsfeed from "../../pages/newsfeed/newsfeed.component";
import Photos from "../../pages/photos/photos.component";

const DisplayComponent = () => {
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

export default DisplayComponent;
