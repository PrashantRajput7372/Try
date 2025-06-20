
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UniversalLinkHandler from "./UniversalLinkHandler";
import MobilePrompt from "./MobilePrompt";

function App() {
  return (
    <Router>
      <Routes>
        {/* This route will be targeted via the Universal Link */}
        <Route path="/extra-path-1/ulink" element={<UniversalLinkHandler />} />
        
        {/* Optional fallback route (or you can redirect all unknown paths to your universal link route) */}
        <Route
          path="*"
          element={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h1>Universal Link Domain</h1>
              <p>
                This domain is solely used for hosting the apple-app-site-association file and handling deep link redirection.
              </p>
            </div>
            <MobilePrompt />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MobilePrompt from "./MobilePrompt";
// import UniversalLinkHandler from "./UniversalLinkHandler";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/extra-path-1/ulink" element={<UniversalLinkHandler />} />
//         <Route
//           path="*"
//           element={
//             <>
//               <div style={{ padding: "40px", textAlign: "center" }}>
//                 <h1>Home Page</h1>
//                 <p>Current URL: {window.location.href}</p>
//               </div>
//               <MobilePrompt />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
