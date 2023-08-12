import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { authContext } from "../../contexts/auth.context";

import { motion } from "framer-motion";

import {
  signInWithGooglePopup,
  signUpWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { ReactComponent as GoogleIcon } from "../../Images/google-icon.svg";
import { ReactComponent as Logo } from "../../Images/logo.svg";
import { ReactComponent as Line } from "../../Images/line.svg";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Button, Typography, Link } from "@mui/material";

const userInputInitial = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState(userInputInitial);
  const { authState, setAuthSate } = useContext(authContext);
  const navigate = useNavigate();

  const { email, password, confirmPassword } = userInput;

  const onSignUpClickHandler = (e) => {
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

  const resetInputValue = () => {
    setUserInput(userInputInitial);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not matching");
      return;
    }
    try {
      await signUpWithEmailAndPassword(userInput);
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      <Box mb={3.7} width="300px" display={"flex"} alignItems={"center"}>
        <Logo />
        <Box ml={1.4}>
          <Typography variant="h1">Create an account</Typography>
          <Typography variant="h5">
            Get started by creating a new account
          </Typography>
        </Box>
      </Box>
      <Box width={"300px"}>
        <Button
          onClick={handleGoogleButton}
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
      </Box>

      <Box
        width={"300px"}
        mb={3}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
      >
        {/* Email and Password Inputs */}
        <form onSubmit={handleOnSubmit}>
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
          <FormControl
            fullWidth={true}
            style={{ marginBottom: "15px" }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <FilledInput
              required
              id="filled-adornment-confirm-password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              onChange={handleInputChange}
              value={confirmPassword}
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
          <Box mt={2} width={"300px"}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              style={{
                borderRadius: "12px",
              }}
              fullWidth={true}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>

      <Box display="flex">
        <Typography variant="h5">Already have an account?</Typography>
        <Link
          onClick={onSignUpClickHandler}
          underline="none"
          sx={{
            cursor: "pointer",
          }}
          ml={1}
          variant="h5"
          fontWeight={"600"}
        >
          Sign In
        </Link>
      </Box>
    </motion.div>
  );
};

export default SignUp;
