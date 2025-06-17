/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { Modal, Button } from "@mui/material";
import useDeviceDetection from "../components/DeviceDetection";

const MobilePrompt = () => {
  const { device, platform } = useDeviceDetection();
  const [openModal, setModal] = useState(false);
  const appOpenedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (device === "Mobile") {
      setModal(true);
    } else {
      setModal(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [device]);

  const handleVisibilityChange = () => {
    if (document.hidden) {
      appOpenedRef.current = true;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      console.log("App opened successfully!");
    }
  };

  const handleOpenApp = () => {
    console.log("Attempting to open app...");

    if (platform === "Android") {
      window.location.href =
        "intent://open#Intent;scheme=maadhaar;package=in.gov.uidai.mAadhaarPlus;end";
    }
  };

  const handleClose = () => setModal(false);

  if (!device) return null;

  return (
    <Modal open={openModal} onClose={handleClose}>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          backgroundColor: "#1c1c1c",
          color: "white",
          padding: "16px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          Use mAadhaar App for a better experience
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "12px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {platform === "iOS" ? (
            // <a
            //   href="https://try-ecru-two.vercel.app/extra-path-1/ulink"
            //   onClick={() => {
            //     appOpenedRef.current = false;
            //     document.addEventListener(
            //       "visibilitychange",
            //       handleVisibilityChange
            //     );
            //     setTimeout(() => {
            //       if (!appOpenedRef.current) {
            //         console.log("App not opened, redirecting to App Store");
            //         window.location.href =
            //           "https://apps.apple.com/app/id1435469474";
            //       }
            //     }, 3000);
            //   }}
            //   style={{
            //     width: "40%",
            //     padding: "8px 16px",
            //     backgroundColor: "#1976d2",
            //     color: "#fff",
            //     borderRadius: "4px",
            //     textAlign: "center",
            //     fontWeight: "bold",
            //     textDecoration: "none",
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",
            //   }}
            // >
            //   Open mAadhaar App
            // </a>



 <a
  href="https://your-universal-link.com"
  style={{
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#1976d2",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Open mAadhaar App
</a>

          ) : (
            <Button
              variant="contained"
              color="primary"
              style={{ width: "40%" }}
              onClick={handleOpenApp}
            >
              Open mAadhaar App
            </Button>
          )}
          <Button
            variant="outlined"
            color="secondary"
            style={{ width: "40%" }}
            onClick={handleClose}
          >
            Continue in Web
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MobilePrompt;
