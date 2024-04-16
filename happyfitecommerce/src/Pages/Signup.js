import { AuthSignUp, Navbar,Alert } from "../Components";
import { Fragment, useEffect, useState } from "react";
import { useAlert } from "../context";

export const SignUp = () => {
    const [route, setRoute] = useState();
    const { alert } = useAlert();

    useEffect(() => {
        setRoute("signup");
    }, [route]);
    return (
        <Fragment>
            {alert.open && <Alert />}
            <Navbar route={route} />
            <AuthSignUp/>
        </Fragment>
    )
}