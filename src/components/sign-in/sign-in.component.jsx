import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setAuthSate } from "../../store/auth/auth.action";
import { selectAuthState } from "../../store/auth/auth.selector";

import { motion } from "framer-motion";

import {
  logInWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { ReactComponent as LogoWhite } from "../../Images/logo-without-text-white.svg";
import { ReactComponent as Logo } from "../../Images/logo.svg";
import { ReactComponent as Line } from "../../Images/line.svg";
import { ReactComponent as GoogleIcon } from "../../Images/google-icon.svg";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Button, Typography, Link } from "@mui/material";

import "./sign-in.styles.scss";
import { ColorModeContext } from "../../theme";

const userInputInitial = {
  email: "",
  password: "",
};

const SignIn = () => {
  const displatch = useDispatch();
  const [userInput, setUserInput] = useState(userInputInitial);
  const [showPassword, setShowPassword] = useState(false);
  const { mode } = useContext(ColorModeContext);
  const { email, password } = userInput;
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSignInClickHandler = (e) => {
    e.preventDefault();
    displatch(setAuthSate("signup"));
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await logInWithEmailAndPassword(userInput);
      resetInputValue();
      navigate("user/home");
    } catch (err) {
      alert(err);
    }
  };

  const handleGoogleButton = async (e) => {
    e.preventDefault();
    try {
      await signInWithGooglePopup();
      navigate("user/home");
    } catch (err) {
      alert(err);
    }
  };

  const resetInputValue = () => {
    setUserInput(userInputInitial);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
        height: "100%",
      }}
    >
      <Box mb={5.7} width="300px" display={"flex"} alignItems={"center"}>
        {mode === "dark" ? <LogoWhite /> : <Logo />}
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
          onClick={handleGoogleButton}
          sx={{
            borderRadius: "12px",
            color: "black.main",
            borderColor: "black.main",
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
    </motion.div>
  );
};

export default SignIn;
