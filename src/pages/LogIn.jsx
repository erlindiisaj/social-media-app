import "../pages/login-styles.sass";
import { useState } from "react";
import { Box, Button, Typography, TextField, FilledInput } from "@mui/material";
import Image from "../Images/background-image.png";
import { ReactComponent as Logo } from "../Images/logo.svg";
import { ReactComponent as Line } from "../Images/line.svg";
import { ReactComponent as SignInImage } from "../Images/signin-img.svg";
import { ReactComponent as GoogleIcon } from "../Images/google-icon.svg";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 1,
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          height: "650px",
          width: 0.7,
          backgroundColor: "rgba(245, 245, 247, 0.5)",
          borderRadius: "12px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          width={0.5}
          height={1}
        >
          <Box mb={5.7} width="300px" display={"flex"} alignItems={"center"}>
            <Logo />
            <Box ml={1.4}>
              <Typography variant="h1">Welcome back!</Typography>
              <Typography variant="h5">
                Please enter log in details below
              </Typography>
            </Box>
          </Box>
          <Box
            mb={4.5}
            display={"flex"}
            alignItems="center"
            justifyContent="center"
            flexDirection={"column"}
          >
            <TextField
              sx={{ marginBottom: "15px" }}
              className="input"
              label="Email"
              variant="filled"
            />
            <FormControl fullWidth={true} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
          <Box width={"300px"}>
            <Button
              size="large"
              variant="contained"
              sx={{ borderRadius: 1.2 }}
              fullWidth={true}
            >
              Sign In
            </Button>
            <Box
              m={0.3}
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Line />{" "}
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 300,
                  color: "rgba(0, 0, 0, 0.50)",
                }}
              >
                or continue
              </p>
              <Line />
            </Box>
            <Button
              startIcon={<GoogleIcon />}
              size="large"
              variant="outlined"
              fullWidth={true}
            >
              Log in with google
            </Button>
          </Box>
          <Box mt={3} display="flex">
            <Typography variant="h6">Don't have an account?</Typography>
            <Typography ml={1} variant="h6" fontWeight={"600"}>
              Sign Up
            </Typography>
          </Box>
        </Box>
        <Box width={0.5}>
          <SignInImage />
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
