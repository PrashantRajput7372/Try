import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UniversalLinkHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log("App opened successfully!");
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Trigger the universal link redirection
    window.location.href = `https://try-ecru-two.vercel.app/extra-path-1/ulink?t=${Date.now()}`;

    // Fallback timeout for App Store redirection
    const timer = setTimeout(() => {
      console.log("App not opened, redirecting to App Store");
      window.location.href = "https://apps.apple.com/app/id1435469474";
    }, 1500);

    // Cleanup function to clear the timeout and remove event listener
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Redirecting to mAadhaar App...</h2>
      <p>
        If redirection doesn’t happen automatically,{" "}
        <a href="https://apps.apple.com/app/id1435469474">click here</a>.
      </p>
    </div>
  );
};

export default UniversalLinkHandler;





// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const UniversalLinkHandler = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.log("Universal Link Triggered:", window.location.href);

//     const timer = setTimeout(() => {
//       console.log("Redirecting to App Store");
//       window.location.href = "https://apps.apple.com/app/id1435469474";
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (

//   <div style={{ padding: 40, textAlign: "center" }}>
//     {/* Embedded spinner styles */}
//     <style>{`
//       .apple-spinner {
//         margin: 0 auto;
//         width: 40px;
//         height: 40px;
//         border-radius: 50%;
//         border: 4px solid #cfd0d1;
//         border-top-color: #000000;
//         animation: spin 0.8s linear infinite;
//       }

//       @keyframes spin {
//         to {
//           transform: rotate(360deg);
//         }
//       }
//     `}</style>

//     <div className="apple-spinner" />

//     <p style={{ marginTop: 20 }}>
//       Redirecting to mAadhaar App...
//       <br />
//       If redirection doesn't happen in 3 seconds,&nbsp;
//       <a href="https://apps.apple.com/app/id1435469474">click here</a>.
//     </p>
//   </div>
//   );
// };

// export default UniversalLinkHandler;
