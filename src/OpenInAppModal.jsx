import React, { useState } from "react";

const OpenInAppModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenApp = () => {
    const timestamp = Date.now();
    // USE EXISTING AASA PATH
    window.location.href = `https://try-ecru-two.vercel.app/extra-path-1/ulink?t=${timestamp}`;
  };

  return (
    <>
      <button
        style={{
          padding: "12px 24px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        Open In App Modal
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 32,
              borderRadius: 10,
              minWidth: 320,
              boxShadow: "0 2px 24px 0 rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Open in App</h2>
            <p style={{ marginBottom: 24 }}>
              For best experience, open this in the mAadhaar app
            </p>
            <button
              style={{
                padding: "12px 24px",
                background: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
                marginRight: 12,
              }}
              onClick={handleOpenApp}
            >
              Open App
            </button>
            <button
              style={{
                padding: "10px 20px",
                background: "#f1f1f1",
                color: "#333",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                marginLeft: 6,
              }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenInAppModal;
