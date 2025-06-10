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
    const appStoreUrl = "https://apps.apple.com/app/instagram/id389801252";
    const appSchemeUrl = "instagram://";

    if (platform === "Android") {
      window.location.href =
        "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
    } else if (platform === "iOS") {
      const timeout = setTimeout(() => {
        window.location.href = appStoreUrl;
      }, 2500); // 👈 Give app ~2.5s to respond

      // Must be triggered by user interaction to avoid popup block
      window.location = appSchemeUrl;

      // Optional: clear the timeout if user switches away (visibility changes)
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timeout); // user switched to Instagram app
          document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange
          );
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
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
