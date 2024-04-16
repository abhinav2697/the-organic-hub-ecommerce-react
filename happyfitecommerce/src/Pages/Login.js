import { Navbar, AuthLogin, Alert } from "../Components";
import { useState, useEffect, Fragment } from "react";
import { useAlert } from ".././context";

export const Login = () => {
  const [route, setRoute] = useState();
  const {alert} = useAlert();

  useEffect(() => {
    setRoute("login");
  }, [route]);
  return (
    <Fragment>
      {alert.open && <Alert />}
      <Navbar route={route} />
      <AuthLogin />
    </Fragment>
  );
};
