import { Avatar, Box, Button, Alert } from "@mui/material";
import "./upload-image.styles.scss";
import { useContext, useEffect } from "react";
import { userContext } from "../../contexts/user.context";
import { useState } from "react";
import { uploadImage, uploadPost } from "../../utils/firebase/firebase.utils";
import Snackbar from "@mui/material/Snackbar";
import WrongPath from "../wrong-path/wrong-path.component";
import { AlternateEmailTwoTone } from "@mui/icons-material";
import { getImages } from "../../utils/firebase/firebase.utils";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [isSuccessAlertVisable, setIsSuccessAlertVisable] = useState(false);
  const [isFailedAlertVisable, setIsFailedAlertVisable] = useState(false);
  const { user } = useContext(userContext);
  const { uid } = user;

  const objectToAdd = {
    id: "1",
    user: "Liam Bennett",
    dateCreated: "yesterday",
    description:
      "Embarking on a transformative journey, I let my wanderlust guide me through unfamiliar landscapes, in the embrace of nature and discovering the depths of my soul!",
    likes: "671",
    comments: "24",
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleClose = () => {
    setIsFailedAlertVisable(false);
    setIsSuccessAlertVisable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file === null) {
      alert("Please select a photo");
      return;
    }
    try {
      await uploadPost(uid, objectToAdd, file);
      setIsSuccessAlertVisable(true);
    } catch (err) {
      console.log(err);
      setIsFailedAlertVisable(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-image-form">
      <Box className="inputfile-container" display="flex" alignItems="center">
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={isSuccessAlertVisable}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            File uploaded successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={isFailedAlertVisable}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Error! File not uploaded!
          </Alert>
        </Snackbar>
        <Avatar
          sx={{
            marginRight: "20px",
          }}
        />
        <input
          onChange={handleChange}
          accept="image/*"
          type="file"
          name="file"
          id="file"
          className="inputfile"
        />
        <label htmlFor="file">Click here to add a post</label>{" "}
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
