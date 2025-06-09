import React from "react";

export default function App() {
  const handleOpenApp = () => {
   // window.location.href = "https://try-ecru-two.vercel.app//mypath"; // Update this with your domain
      window.location.href = "maadhaar://"; // Update this with your domain
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Universal Link Test</h1>
      <button
        onClick={handleOpenApp}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Open iOS App
      </button>
    </div>
  );
}
