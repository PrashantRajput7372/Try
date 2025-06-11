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
    // const appStoreUrl = "https://apps.apple.com/app/instagram/id389801252";
    // const appSchemeUrl = "instagram://";

    if (platform === "Android") {
      window.location.href =
        "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
    } else if (platform === "iOS") {
       const now = Date.now();
  let hidden = false;

  const onVisibilityChange = () => {
    hidden = document.hidden;
  };

  document.addEventListener("visibilitychange", onVisibilityChange);

  // Try to open Instagram using a hidden iframe
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = "instagram://";
  document.body.appendChild(iframe);

  setTimeout(() => {
    document.removeEventListener("visibilitychange", onVisibilityChange);
    document.body.removeChild(iframe);
    if (!hidden && Date.now() - now < 4000) {
      window.location.href = "https://apps.apple.com/app/instagram/id389801252";
    }
  }, 3000); // or try 3000ms if needed
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
            onClick={handleOpenApp}
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
