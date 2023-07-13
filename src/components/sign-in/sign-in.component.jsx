import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/auth.context";

import "./sign-in.styles.scss";

import { ReactComponent as Logo } from "../../Images/logo.svg";
import { ReactComponent as Line } from "../../Images/line.svg";
import { ReactComponent as GoogleIcon } from "../../Images/google-icon.svg";

import { Box, Button, Typography, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const userInputInitial = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [userInput, setUserInput] = useState(userInputInitial);
  const [showPassword, setShowPassword] = useState(false);
  const { authState, setAuthSate } = useContext(authContext);
  const { email, password } = userInput;
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSignInClickHandler = (e) => {
    e.preventDefault();
    authState === "signin" ? setAuthSate("signup") : setAuthSate("signin");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    navigate("/homepage");
    resetInputValue();
  };

  const resetInputValue = () => {
    setUserInput(userInputInitial);
  };

  return (
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
        width={"300px"}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
      >
        {/* Email and Password Inputs */}
        <form onSubmit={handleOnSubmit}>
          <div>
            <TextField
              required
              id="email"
              name="email"
              type="email"
              fullWidth={true}
              style={{ marginBottom: "15px" }}
              label="Email"
              variant="filled"
              onChange={handleInputChange}
              value={email}
            />
            <FormControl
              fullWidth={true}
              style={{ marginBottom: "15px" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                required
                onChange={handleInputChange}
                value={password}
                id="filled-adornment-password"
                name="password"
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
              />
            </FormControl>
          </div>
          <Button
            type="submit"
            size="large"
            variant="contained"
            style={{
              borderRadius: "12px",
              marginTop: "45px",
            }}
            fullWidth={true}
          >
            Sign In
          </Button>
        </form>
      </Box>
      <Box width={"300px"}>
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
          style={{
            borderRadius: "12px",
            color: "black",
            borderColor: "black",
          }}
          startIcon={<GoogleIcon />}
          size="large"
          variant="outlined"
          fullWidth={true}
        >
          Log in with google
        </Button>
      </Box>
      <Box mt={3} display="flex">
        <Typography variant="h5">Don't have an account?</Typography>
        <Link
          onClick={onSignInClickHandler}
          underline="none"
          sx={{
            cursor: "pointer",
          }}
          ml={1}
          variant="h5"
          fontWeight={"600"}
        >
          Sign Up
        </Link>
      </Box>
    </Box>
  );
};

export default SignIn;
