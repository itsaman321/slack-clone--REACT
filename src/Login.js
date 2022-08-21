import { Button } from "@mui/material";
import React from "react";
import "./login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state,dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
          
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://ty.ie/wp-content/uploads/2019/10/slack.png" alt="" />
        <h1>Sign In to Slack Clone</h1>
        <p>clone.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
