import { Avatar, Box, Button, Alert } from "@mui/material";
import "./upload-image.styles.scss";
import { useContext } from "react";
import { userContext } from "../../contexts/user.context";
import { useState } from "react";
import { uploadPost } from "../../utils/firebase/firebase.utils";
import Snackbar from "@mui/material/Snackbar";
import { ReactComponent as UploadSVG } from "../../Images/upload-img.svg";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const initialObjectToAdd = {
  description: "",
  likes: "",
  comments: "",
};

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [objectToAdd, setObjectToAdd] = useState(initialObjectToAdd);
  const [isSuccessAlertVisable, setIsSuccessAlertVisable] = useState(false);
  const [isFailedAlertVisable, setIsFailedAlertVisable] = useState(false);
  const { user } = useContext(userContext);

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
      await uploadPost(user, objectToAdd, file);
      setIsSuccessAlertVisable(true);
      setObjectToAdd({ description: "" });
      setFile(null);
    } catch (err) {
      console.log(err);
      setIsFailedAlertVisable(true);
    }
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    e.preventDefault();
    setObjectToAdd({
      ...objectToAdd,
      description: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="upload-image-form">
      <Box className="inputfile-container">
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/2",
            gridColumn: "1/2",
          }}
        >
          <Avatar />
        </Box>
        <Box
          sx={{
            width: "100%",
            gridRow: "1/2",
            gridColumn: "2/3",
          }}
        >
          <input
            onChange={handleDescriptionChange}
            className="description-input"
            placeholder="Write a description here..."
            type="text"
            value={objectToAdd.description}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/2",
            gridColumn: "3/4",
          }}
        >
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

        <Box
          sx={{
            marginTop: "15px",
            gridRow: "2/3",
            gridColumn: "2/3",
            border: "1px solid rgba(183, 187, 199, 0.25)",
            width: "100%",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            placeholder="browse file"
            onChange={handleChange}
            accept="image/*"
            type="file"
            name="file"
            id="file"
            className="inputfile"
          />

          <label className={file ? "image-selected" : ""} htmlFor="file">
            {" "}
            {file ? (
              <TaskAltRoundedIcon
                color="success"
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
            ) : (
              <UploadSVG />
            )}
            {file ? `Image selected!` : "Select an image..."}
          </label>
        </Box>
      </Box>
    </form>
  );
};

export default CreatePost;
