import React, { useState, useEffect } from "react";
import { Modal, Button } from "@mui/material";

const MobilePrompt = ({ device, platform }) => {
  const [openModal, setModal] = useState(false);

  useEffect(() => {
    console.log("Received Device:", device);
    console.log("Received Platform:", platform);

    if (device === "Mobile") {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [device]);

  const handleOpenApp = () => {
    if (platform === "Android") {
      // WhatsApp deep link with fallback to Play Store
      window.location.href =
        "intent://send?text=Hello#Intent;scheme=whatsapp;package=com.whatsapp;end";
    } else if (platform === "iOS") {
      // WhatsApp fallback for iOS
      window.location.href =
        "https://apps.apple.com/us/app/whatsapp-messenger/id310633997";
    } else {
      alert("App link not available for your device");
    }
  };

  const handleClose = () => {
    setModal(false);
  };

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
          maxWidth: "600px",
          width: "90%",
          margin: "0 auto",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          For a better experience, use the app
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "12px",
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{
              flex: "1",
              minWidth: "140px",
              maxWidth: "250px",
              padding: "8px",
              fontSize: "16px",
            }}
            onClick={handleOpenApp}
          >
            Use App
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={{
              flex: "1",
              minWidth: "140px",
              maxWidth: "250px",
              padding: "8px",
              fontSize: "16px",
            }}
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
