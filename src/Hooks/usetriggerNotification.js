import React, { useCallback, useState } from "react";
import { Notification } from "../Components/ToastMessage/Notification";

export const useTriggerNotification = () => {
  const [messageMap, updateMessageMap] = useState({});

  const closeAlert = (message) => {
    updateMessageMap((prev) => {
      const messageCopy = { ...prev };
      delete messageCopy[message];
      return messageCopy;
    });
  };

  const triggerNotification = useCallback((prop) => {
    updateMessageMap((prevMessage) => ({
      ...prevMessage,
      [`${prop.message}`]: prop,
    }));

    // ((x) =>
    //   setTimeout(() => {
    //     closeAlert(x);
    //   }, 3000))(prop.message);
    setTimeout(() => {
      closeAlert(prop.message);
    }, 3000);
  }, []);

  const AlertBox = Object.keys(messageMap)?.length ? (
    <div>
      {Object.keys(messageMap || {}).map((item, index) => (
        <Notification
          message={messageMap?.[item]?.message}
          type={messageMap?.[item]?.type}
          index={index}
          position={messageMap?.[item]?.position}
        />
      ))}
    </div>
  ) : null;

  return { triggerNotification, AlertBox };
};
