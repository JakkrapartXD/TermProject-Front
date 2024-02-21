import React, { useEffect, useState } from "react";
import Login from "./components/login";
import Homepage from "./components/homepage";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("title");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("picture");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
  };

  return (
    (isUserSignedIn && <Homepage onLogout={onLogout} />) || (
      <Login onLoginSuccessful={onLoginSuccessful} />
    )
  );
}

export default App;
