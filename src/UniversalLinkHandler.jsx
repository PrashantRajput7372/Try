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
    {/* Embedded spinner styles */}
    <style>{`
      .apple-spinner {
        margin: 0 auto;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid #cfd0d1;
        border-top-color: #000000;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>

    <div className="apple-spinner" />

    <p style={{ marginTop: 20 }}>
      Redirecting to mAadhaar App...
      <br />
      If redirection doesn't happen in 3 seconds,&nbsp;
      <a href="https://apps.apple.com/app/id1435469474">click here</a>.
    </p>
  </div>
  );
};

export default UniversalLinkHandler;
