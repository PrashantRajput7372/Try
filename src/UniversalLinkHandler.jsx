//New Working one

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const UniversalLinkHandler = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.log("Universal Link Triggered:", window.location.href);

//     // Attempt to open the app by navigating to the universal link.
//     // The AASA file on your domain should enable iOS to associate the link with your app.
//     const timer = setTimeout(() => {
//       console.log("App not opened, redirecting to App Store");
//       window.location.href = "https://apps.apple.com/app/id1435469474";
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div style={{ padding: 40, textAlign: "center" }}>
//       <h2>Redirecting to mAadhaar App...</h2>
//       <p>
//         If the redirection doesn’t happen automatically,{" "}
//         <a href="https://apps.apple.com/app/id1435469474">
//           click here to open App Store.
//         </a>
//       </p>
//     </div>
//   );
// };

// export default UniversalLinkHandler;



// import React, { useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";

// const UniversalLinkHandler = () => {
//   const timerRef = useRef(null);
//   const appOpenedRef = useRef(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Use a query parameter (attempted=1) to check if redirection was already attempted
//     if (window.location.search.includes("attempted=1")) {
//       console.log("Redirection already attempted; not triggering again.");
//       return;
//     }
    
//     // Update the URL (without reloading) to signal that redirection is attempted.
//     // This prevents the redirection code from running again on reload.
//     const updatedURL = `${window.location.pathname}?attempted=1`;
//     window.history.replaceState(null, "", updatedURL);

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         appOpenedRef.current = true;
//         console.log("App opened successfully!");
//         document.removeEventListener("visibilitychange", handleVisibilityChange);
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     // Construct the universal link with a timestamp
//     const timestamp = Date.now();
//     const universalLink = `https://try-ecru-two.vercel.app/extra-path-1/ulink?t=${timestamp}&attempted=1`;
//     console.log("Triggering Universal Link:", universalLink);

//     // Trigger redirection; this should open the app if installed.
//     window.location.href = universalLink;

//     // Set a fallback timer for App Store redirection if the app isn’t opened
//     timerRef.current = setTimeout(() => {
//       if (!appOpenedRef.current) {
//         console.log("App not opened, redirecting to App Store.");
//         window.location.href = "https://apps.apple.com/app/id1435469474";
//       }
//     }, 1500);

//     // Clean up on unmount
//     return () => {
//       clearTimeout(timerRef.current);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, [location]);

//   return (
//     <div style={{ padding: 40, textAlign: "center" }}>
//       <h2>Redirecting to mAadhaar App...</h2>
//       <p>
//         If redirection doesn’t happen automatically,{" "}
//         <a href="https://apps.apple.com/app/id1435469474">click here</a>.
//       </p>
//     </div>
//   );
// };

// export default UniversalLinkHandler;


//which was working fine 

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
