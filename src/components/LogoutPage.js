import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const LogoutPage = () => {
  // promises
  // const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    fetch("/shop/logout", {
      method: "GET",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        // dispatch({ type: "USER", payload: false });
        localStorage.clear();
        history.push("/login", { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <>{/* <h1>Logout ka page</h1> */}</>;
};

export default LogoutPage;
