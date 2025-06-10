import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const [device, setDevice] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      // Detect device
      if (isMobile) {
        setDevice("Mobile");
      } else if (isTablet) {
        setDevice("Tablet");
      } else {
        setDevice("Desktop");
      }

      // Detect platform
      if (/android/.test(userAgent)) {
        setPlatform("Android");
      } else if (/iphone|ipad|ipod/.test(userAgent)) {
        setPlatform("iOS");
      } else {
        setPlatform("Other");
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);
  useEffect(() => {
    console.log("Updated device use effect:", device);
    console.log("Updated platform use Effect:", platform);
  }, [device, platform]);

  return { device, platform };
};

export default useDeviceDetection;
