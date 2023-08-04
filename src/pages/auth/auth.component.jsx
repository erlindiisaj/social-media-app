import { useContext } from "react";
import { authContext } from "../../contexts/auth.context";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import { Box } from "@mui/material";

import Image from "../../Images/background-image.png";
import { ReactComponent as AuthPageImage } from "../../Images/auth-image.svg";

const Auth = () => {
  const { authState } = useContext(authContext);

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
        {authState === "signup" ? <SignUp /> : <SignIn />}
        <Box width={0.5}>
          <AuthPageImage />
        </Box>
      </Box>
    </Box>
  );
};

export default Auth;
