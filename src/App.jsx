import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobilePrompt from "./MobilePrompt";
import UniversalLinkHandler from "./UniversalLinkHandler";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/extra-path-1/ulink" element={<UniversalLinkHandler />} />
        <Route
          path="*"
          element={
            <>
              <div style={{ padding: "40px", textAlign: "center" }}>
                <h1>Home Page</h1>
                <p>Current URL: {window.location.href}</p>
              </div>
              <MobilePrompt />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
