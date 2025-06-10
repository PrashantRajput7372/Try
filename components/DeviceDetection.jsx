import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const [device, setDevice] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isAndroid = /android|blackberry|windows phone/g.test(userAgent);
      const isIos = /iphone|ipad|ipod/g.test(userAgent);
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice("Mobile");
        if (isAndroid) {
          setPlatform("Android"); // ✅ Fixed typo
        }
        if (isIos) {
          setPlatform("iOS"); // ✅ Fixed casing
        }
      } else if (isTablet) {
        setDevice("Tablet");
      } else {
        setDevice("Desktop");
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return { device, platform };
};

export default useDeviceDetection;
