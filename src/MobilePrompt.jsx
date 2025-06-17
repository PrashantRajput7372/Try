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
    } else if (platform === "iOS") {
      appOpenedRef.current = false;
      const timestamp = Date.now();
      const universalLink = `https://try-ecru-two.vercel.app/extra-path-1/ulink?t=${timestamp}`;

      console.log("Using Universal Link:", universalLink);
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // First try: Universal Link
      window.location.href = universalLink;

      // Fallback to App Store
      timerRef.current = setTimeout(() => {
        if (!appOpenedRef.current) {
          console.log("App not opened, redirecting to App Store");
          window.location.href = "https://apps.apple.com/app/id1435469474";
        }
      }, 1000);
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
          <Button
            variant="contained"
            color="primary"
            style={{ width: "40%" }}
            onClick={handleOpenApp}
          >
            Open mAadhaar App
          </Button>
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
