import { useContext, useEffect, useState } from "react";

import { userContext } from "../../contexts/user.context";

import {
  changeUsersDisplayName,
  changeUsersEmail,
} from "../../utils/firebase/firebase.utils";

import TextField from "@mui/material/TextField";
import { Avatar, Box, Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import Navbar from "../../components/navbar/navbar.component";
import SnackbarAlert from "../../components/snackbar-alert/snackbar-alert.component";
import DeleteConfirmation from "../../components/delete-confirmation/delete-confirmation.component";

const Settings = () => {
  const { user } = useContext(userContext);
  const [fullName, setFullName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { photoURL, displayName, email } = user;

  useEffect(() => {
    setFullName(displayName);
    setEmailValue(email);
  }, [user]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setFullName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (displayName === fullName) return;
    setIsLoading(true);
    try {
      await changeUsersDisplayName(user, fullName);
      setIsLoading(false);
      setIsOpen(true);
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
  };

  const handleEmailChange = async (e) => {
    e.preventDefault();
    if (emailValue === email) return;
    try {
      await changeUsersEmail(user, emailValue);
      setEmailChanged(true);
    } catch (err) {
      alert(err);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setEmailChanged(false);
  };
  return (
    <>
      <Navbar />
      <Box
        backgroundColor="backgroundAccent.main"
        display="flex"
        flexDirection="column"
        width="100%"
        height="fit-content"
        alignItems="center"
      >
        <SnackbarAlert
          isOpen={isOpen}
          handleClose={handleClose}
          message={`Username changed to ${fullName}`}
          type="success"
        />
        <SnackbarAlert
          isOpen={emailChanged}
          handleClose={handleClose}
          message={`Email changed to ${emailValue}`}
          type="success"
        />
        <Box
          width="80%"
          height="350px"
          sx={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "0.3fr 0.7fr",
            borderRadius: "12px",
            backgroundColor: "white.main",
          }}
        >
          <Typography
            fontWeight={600}
            sx={{ margin: "40px 30px" }}
            variant="h3"
          >
            Basic Details
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="flex-start"
            margin="20px 0"
          >
            <Box display="flex" alignItems="center">
              <Avatar
                src={photoURL}
                sx={{
                  width: "100px",
                  height: "100px",
                  marginRight: "20px",
                }}
              />
              <Button
                sx={{
                  borderRadius: "12px",
                  color: "black.main",
                  height: "37px",
                  "&:hover": {
                    backgroundColor: "gray.light",
                  },
                }}
              >
                Change
              </Button>
            </Box>
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
              }}
            >
              <Box display="flex" alignItems="center" width="100%">
                <TextField
                  onChange={handleInputChange}
                  sx={{
                    width: "80%",
                  }}
                  InputProps={{
                    sx: {
                      borderRadius: "12px",
                      marginRight: "20px",
                    },
                  }}
                  id="outlined-search"
                  label="Full Name"
                  value={fullName}
                  type="text"
                  required
                />
                <Button
                  type="submit"
                  sx={{
                    borderRadius: "12px",
                    color: "black.main",
                    height: "37px",
                    "&:hover": {
                      backgroundColor: "gray.light",
                    },
                  }}
                >
                  {isLoading ? (
                    <CircularProgress size="20px" color="black" />
                  ) : (
                    "Save"
                  )}
                </Button>
              </Box>{" "}
            </form>
            <form
              style={{
                width: "100%",
              }}
              onSubmit={handleEmailChange}
            >
              <Box display="flex" alignItems="center" width="100%">
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  InputProps={{
                    sx: {
                      borderRadius: "12px",
                      marginRight: "20px",
                    },
                  }}
                  id="outlined-search"
                  label="Email"
                  type="text"
                  required
                  onChange={(e) => setEmailValue(e.target.value)}
                  value={emailValue}
                  disabled={!isEditing}
                />
                <Button
                  type="submit"
                  sx={{
                    borderRadius: "12px",
                    color: "black.main",
                    height: "37px",
                    "&:hover": {
                      backgroundColor: "gray.light",
                    },
                  }}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
        <Box
          width="80%"
          sx={{
            margin: "30px 0",
            padding: "40px 0",
            display: "grid",
            gridTemplateColumns: "0.3fr 0.7fr",
            borderRadius: "12px",
            backgroundColor: "white.main",
          }}
        >
          <Typography fontWeight={600} sx={{ margin: "0 30px" }} variant="h3">
            Delete Account
          </Typography>
          <Box
            width="fit-content"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Typography fontWeight={500} marginBottom={3}>
              Delete your account and all of your source data. This is
              irreversible.
            </Typography>
            <DeleteConfirmation />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
