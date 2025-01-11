import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  const addOnlineEventListener = () => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
  };

  useEffect(() => {
    addOnlineEventListener();
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
