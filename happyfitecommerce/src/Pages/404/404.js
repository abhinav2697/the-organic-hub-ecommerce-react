import { useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import {Loader} from "../../Components";
import "./404.css";

export const Error = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1000)
  }, [])

  return (
    <Fragment>
        {!isLoading ? (<Loader />) : (<div className="error-page">
        <h1 className="error-title">404</h1>
        <h2 className="error-msg">
            The page you are looking for does not exist or some other error occured.
        </h2>
        <button
            onClick={() => navigate("/")}
            className="button btn-primary d-flex align-center justify-center gap cursor">
            <span class="material-icons-outlined">arrow_back</span>Go to Home Page
        </button>
            </div>)}
  </Fragment>
    
  );
};
