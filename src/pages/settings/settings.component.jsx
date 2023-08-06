import { useContext, useEffect, useState } from "react";

import { userContext } from "../../contexts/user.context";

import { changeUsersDisplayName } from "../../utils/firebase/firebase.utils";

import TextField from "@mui/material/TextField";
import { Avatar, Box, Button, Typography } from "@mui/material";

import Navbar from "../../components/navbar/navbar.component";

const Settings = () => {
  const { user } = useContext(userContext);
  const { photoURL, displayName, email } = user;
  const [fullName, setFullName] = useState("");
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    setFullName(displayName);
    setEmailValue(email);
  }, [user]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setFullName(value);
  };

  const handleSubmit = () => {
    changeUsersDisplayName(user, fullName);
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
              />
              <Button
                onClick={handleSubmit}
                sx={{
                  borderRadius: "12px",
                  color: "black.main",
                  height: "37px",
                  "&:hover": {
                    backgroundColor: "gray.light",
                  },
                }}
              >
                Save
              </Button>
            </Box>{" "}
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
                disabled
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
                Edit
              </Button>
            </Box>
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
            <Button
              sx={{
                borderRadius: "12px",
                height: "45px",
                width: "30%",
              }}
              size="medium"
              variant="outlined"
              color="error"
            >
              Delete Account
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
