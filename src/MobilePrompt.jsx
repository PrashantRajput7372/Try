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
      setModal(false);
    }
  }, [device]);

  const handleOpenApp = () => {
    if (platform === "Android") {
      // Android: use intent URL
      window.location.href =
        "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
    } else if (platform === "iOS") {
      // iOS: use iframe to avoid invalid URL error
      const appStoreUrl = "https://apps.apple.com/app/instagram/id389801252";
      const appScheme = "instagram://";
      let hidden = false;
      const startTime = Date.now();

      const onVisibilityChange = () => {
        hidden = document.hidden;
      };

      document.addEventListener("visibilitychange", onVisibilityChange);

      // Try opening the app via iframe
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = appScheme;
      document.body.appendChild(iframe);

      // Wait 3s, then redirect if app wasn't opened
      setTimeout(() => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
        document.body.removeChild(iframe);

        const timeElapsed = Date.now() - startTime;
        if (!hidden && timeElapsed < 3500) {
          window.location.href = appStoreUrl;
        }
      }, 3000);
    } else {
      alert("App link not available for your device");
    }
  };

  const handleClose = () => {
    setModal(false);
  };

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
          Use Instagram App for a better experience
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
            onClick={handleOpenApp} // ✅ user interaction required
          >
            Open Instagram App
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
