import { useContext } from "react";
import { Route, redirect } from "react-router-dom";

import { userContext } from "../../contexts/user.context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(userContext);
  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : redirect("auth"))}
    />
  );
};

export default PrivateRoute;
