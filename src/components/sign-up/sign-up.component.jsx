import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/auth.context";
import { ReactComponent as GoogleIcon } from "../../Images/google-icon.svg";
import { ReactComponent as Logo } from "../../Images/logo.svg";
import { ReactComponent as Line } from "../../Images/line.svg";

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
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState(userInputInitial);
  const { authState, setAuthSate } = useContext(authContext);
  const navigate = useNavigate();

  const { name, email, password, confirmPassword } = userInput;

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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password not matching");
      return;
    }
    console.log(userInput);
    navigate("/user/home");
    resetInputValue();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            id="name"
            name="name"
            type="text"
            fullWidth={true}
            style={{ marginBottom: "15px" }}
            label="Name"
            variant="filled"
            onChange={handleInputChange}
            value={name}
          />
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
    </Box>
  );
};

export default SignUp;
