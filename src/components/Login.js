import React, { useState } from "react";
import "./Login.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { auth } from "../Firebase";
import { useDispatch } from "react-redux";
import { logInUser } from "../features/userContext";


const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(1);
  const [inputVals, setInputVals] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "", 
  });
  const setInputVal = (e) => {
    setInputVals({
      ...inputVals,
      [e.target.name]: e.target.value,
    });
  };

  const setSignUp = () => {
    if (login) {
      setLogin(0);
    } else setLogin(1);
  };

  const register = (e) => {
    e.preventDefault();
    if (
      !inputVals.name ||
      !inputVals.email ||
      !inputVals.password ||
      !inputVals.imageUrl
    )
      alert("Fill all inputs in the form ");
    else {
      console.log(inputVals);
      auth
        .createUserWithEmailAndPassword(inputVals.email, inputVals.password)
        .then((userAuth) => {
          if (userAuth != null) {
            userAuth.user
              .updateProfile({
                displayName: inputVals.name,
                photoUrl: inputVals.photoUrl,
              })
              .then(() => {
                dispatch(
                  logInUser({
                    email: userAuth.user.email,
                    uId: userAuth.user.email,
                    photoUrl: inputVals.imageUrl,
                    displayName: inputVals.name,
                  })
                );
              });
          }
        }).catch(error=>alert(error));

      setInputVals({
        name: "",
        email: "",
        password: "",
        imageUrl: "",
      });
    }
  };
  return (
    <div classname="w-screen h-screen flex  ">
      <div className="loginSec flex justify-center items-center flex-col bg-yellow-50 w-screen h-screen">
        <div className="loginIcon justify-center items-center flex -mb-3">
          <font className="font-bold text-black text-3xl">Linked</font>
          <LinkedInIcon sx={{ fontSize: [40] }} className="loginLinkedIcon" />
        </div>
        {login ? (
          <form className="loginForm  ">
            <div className="allInputs flex flex-col">
              <input
                type="email"
                name="name"
                id=""
                placeholder="Enter Your Email"
                className="my-2 mx-4"
                value={inputVals.name}
                onChange={setInputVal}
              />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                className="my-2 mx-4"
                value={inputVals.password}
                onChange={setInputVal}
              />
              <button className="submitButton">Log In</button>
            </div>
          </form>
        ) : (
          <form action="" className="loginForm " onSubmit={register}>
            <div className="allInputs flex flex-col">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                className="my-2 mx-4"
                value={inputVals.name}
                onChange={setInputVal}
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Your Email"
                className="my-2 mx-4"
                value={inputVals.email}
                onChange={setInputVal}
              />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                className="my-2 mx-4"
                value={inputVals.password}
                onChange={setInputVal}
              />
              <input
                type="text"
                name="imageUrl"
                id=""
                placeholder="Profile Pic url"
                className="my-2 mx-4"
                value={inputVals.imageUrl}
                onChange={setInputVal}
              />

              <button className="submitButton" onClick={register}>
                Sign Up
              </button>
            </div>
          </form>
        )}

        <div className="loginTexts -mt-2">
          <font className="font-bold">
            {login ? "Not a member?" : "Already a member?"}
          </font>{" "}
          <button
            className="loginText font-bold cursor-pointer "
            onClick={setSignUp}
          >
            {login ? "SignIn" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
