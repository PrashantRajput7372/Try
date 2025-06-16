import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UniversalLinkHandler = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Universal Link Triggered:", window.location.href);

    const timer = setTimeout(() => {
      console.log("Redirecting to App Store");
      window.location.href = "https://apps.apple.com/app/id1435469474";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Redirecting to mAadhaar App...</h2>
      <p>
        Universal Link Path: {location.pathname}
        <br />
        If redirection doesn't happen in 3 seconds,{" "}
        <a href="https://apps.apple.com/app/id1435469474">click here</a>.
      </p>
    </div>
  );
};

export default UniversalLinkHandler;
