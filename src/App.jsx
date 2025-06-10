import React from "react";
import useDeviceDetection from "../components/DeviceDetection";
import MobilePrompt from "./MobilePrompt";

function App() {
  const { device, platform } = useDeviceDetection();

  // console.log(`Device: ${device}`);
  // console.log(`Platform: ${platform}`);

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Home Page</h1>
      </div>

      {/* Pass detected device & platform to MobilePrompt */}
      <MobilePrompt device={device} platform={platform} />
    </>
  );
}

export default App;
