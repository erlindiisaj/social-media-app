import { useContext, useState } from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";

import { uploadPost } from "../../utils/firebase/firebase.utils";

import { Avatar, Box, Button, InputLabel, Input } from "@mui/material";

import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CircularProgress from "@mui/material/CircularProgress";

import { ReactComponent as UploadSVG } from "../../Images/upload-img.svg";

import "./upload-image.styles.scss";
import SnackbarAlert from "../snackbar-alert/snackbar-alert.component";

const initialObjectToAdd = {
  description: "",
  likes: "",
  comments: "",
};

const CreatePost = () => {
  const user = useSelector(selectUser);
  const [file, setFile] = useState(null);
  const [objectToAdd, setObjectToAdd] = useState(initialObjectToAdd);
  const [isLoading, setIsLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failedOpen, setFailedOpen] = useState(false);
  const { photoURL } = user;

  const handleChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleClose = () => {
    setSuccessOpen(false);
    setFailedOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file === null) {
      alert("Please select a photo");
      return;
    }
    setIsLoading(true);
    try {
      await uploadPost(user, objectToAdd, file);
      setIsLoading(false);
      setSuccessOpen(true);
      setObjectToAdd({ description: "" });
      setFile(null);
    } catch (err) {
      setIsLoading(false);
      setFailedOpen(true);
      setFile(null);
      setObjectToAdd({ description: "" });
      console.log(err);
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
        <SnackbarAlert
          isOpen={successOpen}
          handleClose={handleClose}
          message="File uploaded successfully!"
          type="success"
        />
        <SnackbarAlert
          isOpen={failedOpen}
          handleClose={handleClose}
          message="File upload failed!"
          type="error"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/2",
            gridColumn: "1/2",
          }}
        >
          <Avatar src={photoURL} />
        </Box>
        <Box
          sx={{
            width: "100%",
            gridRow: "1/2",
            gridColumn: "2/3",
          }}
        >
          <Input
            variant="outlined"
            sx={{
              width: "100%",
              height: "50px",
              borderRadius: "12px",
              backgroundColor: "backgroundAccent.main",
              padding: "0 12px",
              "&&&:before": {
                borderBottom: "none",
              },
              "&&:after": {
                borderBottom: "none",
              },
            }}
            onChange={handleDescriptionChange}
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
              width: "80px",
            }}
            variant="contained"
          >
            {isLoading ? (
              <CircularProgress size="20px" color="white" />
            ) : (
              "Post it!"
            )}
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

          <InputLabel
            sx={{
              color: "black.light",
              "&:hover": {
                backgroundColor: "backgroundAccent.main",
              },
            }}
            className={file ? "image-selected" : ""}
            htmlFor="file"
          >
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
          </InputLabel>
        </Box>
      </Box>
    </form>
  );
};

export default CreatePost;
