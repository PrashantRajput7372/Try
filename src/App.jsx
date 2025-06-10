import React from "react";

import MobilePrompt from "./MobilePrompt";

function App() {
  const path = window.location.pathname;

  if (path === "/mypath") {
    return <div>Opening App…</div>;
  }

  const handleOpen = () => {
    window.location.href = "https://otp-frontend-seven.vercel.app/mypath";
  };

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Home Page</h1>
        <button onClick={handleOpen}>Open App MahaDEV SAMBHU TRIPURARI</button>
      </div>
      <MobilePrompt />
    </>
  );
}

export default App;
