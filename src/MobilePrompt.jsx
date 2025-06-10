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
        "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
    } else if (platform === "iOS") {
      // Try opening Instagram on iOS, with fallback logic
      const start = Date.now();
      window.location.href = "instagram://user?username=instagram";

      setTimeout(() => {
        if (Date.now() - start < 2000) {
          window.location.href =
            "https://apps.apple.com/us/app/instagram/id389801252";
        }
      }, 1500);
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
          Use WhatsApp for a better experience
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
            Open WhatsApp
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
