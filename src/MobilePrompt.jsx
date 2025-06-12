import React, { useEffect, useState } from "react";
import { Modal, Button } from "@mui/material";
import useDeviceDetection from "../components/DeviceDetection";

const MobilePrompt = () => {
  const { device, platform } = useDeviceDetection();
  const [openModal, setModal] = useState(false);

  useEffect(() => {
    if (device === "Mobile") {
      setModal(true);
    } else {
      setModal(false); // ✅ Close modal if not mobile
    }
  }, [device]);

  const handleOpenApp = () => {
    if (platform === "Android") {
      // Try opening Instagram on Android
      window.location.href =
        'intent://open#Intent;scheme=maadhaar;package=in.gov.uidai.mAadhaarPlus;end';
    } else if (platform === "iOS") {
      const now = Date.now();
      let hidden = false;

      const onVisibilityChange = () => {
        hidden = document.hidden;
      };

      document.addEventListener("visibilitychange", onVisibilityChange);

      // Open Instagram app
      window.location.href = "maadhaar://";

      // Fallback to App Store if app didn’t open
      setTimeout(() => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
        if (!hidden && Date.now() - now < 4000) {
          window.location.href =
           "https://apps.apple.com/app/id1435469474";
        }
      }, 3000);
    } else {
      alert("App link not available for your device");
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  // 🚫 Skip rendering until detection finishes (device is non-empty)
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
