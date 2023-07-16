import { Avatar, Box, Button } from "@mui/material";

import "./create-post.styles.scss";

const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <form onSubmit={handleSubmit} className="upload-image-form">
      <Box className="inputfile-container" display="flex" alignItems="center">
        <Avatar
          sx={{
            marginRight: "20px",
          }}
        />
        <input input type="file" name="file" id="file" class="inputfile" />
        <label for="file">Click here to add a post</label>{" "}
      </Box>
      <Box>
        <Button
          type="submit"
          style={{
            borderRadius: "12px",
          }}
          variant="contained"
        >
          Post it!
        </Button>
      </Box>
    </form>
  );
};

export default CreatePost;
