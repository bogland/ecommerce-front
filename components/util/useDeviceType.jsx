import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    var filter = "win16|win32|win64|mac|macintel";
    var deviceType = 0; //0:WEB_MOB, 1:WEB_PC, 2:APP_AOS, 3:APP_IOS
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        setDeviceType(0);
      } else {
        setDeviceType(1);
      }
    }
  }, []);
  return { deviceType };
};
export default useDeviceType;
