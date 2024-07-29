import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Store/userSlice";
import ErrorPage from "./Error/Error";

const Body = () => {
  const dispatch = useDispatch();
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Login />,
    },
    {
      path: "error",
      errorElement: <ErrorPage />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, photoURL, displayName, email } = user;
        // console.log(user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
