import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../pages/_app";
import router from "next/router";
const withAuth = Component =>
  function Comp(props) {
    const [status, setStatus] = useState("LOADING");
    const { auth } = useContext(FirebaseContext);
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log(authUser);
        if (authUser) {
          setStatus("SIGNED_IN");
        } else {
          router.push("/signin");
        }
      });
    }, []);
    if (status === "LOADING") {
      return <h1>Loading....</h1>;
    } else if (status === "SIGNED_IN") {
      return <Component {...props} />;
    } else {
      return <div>Yikes</div>;
    }
  };

export default withAuth;
