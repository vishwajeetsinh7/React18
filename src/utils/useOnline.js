import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("onlineeee");
    };

    const handleOffline = () => {
      setIsOnline(false);
      console.log("offfflineee");
    };

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOffline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline; // return true or false
};

export default useOnline;
