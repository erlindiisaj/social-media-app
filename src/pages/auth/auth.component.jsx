import { useSelector } from "react-redux";
import { selectAuthState } from "../../store/auth/auth.selector";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import { Box } from "@mui/material";
import { AuthBackground } from "./auth.styles";

import Image from "../../Images/background-image.png";
import { ReactComponent as AuthPageImage } from "../../Images/auth-image.svg";

const Auth = () => {
  const authState = useSelector(selectAuthState);
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
      <AuthBackground>
        {authState === "signup" ? <SignUp /> : <SignIn />}
        <Box width={0.5}>
          <AuthPageImage />
        </Box>
      </AuthBackground>
    </Box>
  );
};

export default Auth;
