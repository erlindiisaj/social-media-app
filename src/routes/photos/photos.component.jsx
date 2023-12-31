import { Alert, Box } from "@mui/material";
import { useContext } from "react";

import Gallery from "../../components/gallery/gallery.component";
import { userContext } from "../../contexts/user.context";

const Photos = () => {
  const { userPostsList } = useContext(userContext);

  if (userPostsList.length !== 0) {
    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {userPostsList.map((post) => (
          <Gallery key={post.id} id={post.id} post={post.data} />
        ))}
      </Box>
    );
  }
  return (
    <Alert
      sx={{
        height: "50px",
      }}
      severity="warning"
    >
      You haven't posted anything yet!
    </Alert>
  );
};

export default Photos;
