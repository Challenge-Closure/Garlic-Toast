import "./../styles/tost.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import EventBus from "../utils/eventBus";
import AlertToast from "./AlertToast";
import ConfirmToast from "./ConfirmToast";

const ToastContainer = ({ position, time }) => {
  const [alertToasts, setAlertToasts] = useState([]);
  const [confirmToasts, setConfirmToasts] = useState([]);

  useEffect(() => {
    const handleToastEvent = (toast) => {
      setAlertToasts((prevToasts) => [{ ...toast }, ...prevToasts.slice(0, 2)]);
    };

    const handleConfirmToastEvent = (toast) => {
      const confirmToast = {
        id: Date.now(),
        ...toast,
        confirm: true,
      };
      setConfirmToasts((prevToasts) => [confirmToast, ...prevToasts]);
    };

    EventBus.subscribe("SHOW_TOAST", handleToastEvent);
    EventBus.subscribe("SHOW_CONFIRM_TOAST", handleConfirmToastEvent);

    return () => EventBus.unsubscribe();
  }, []);

  return createPortal(
    <>
      <div className={`toast-container ${position}`}>
        {alertToasts.map((toast) => (
          <AlertToast
            key={toast.id}
            toast={toast}
            alertToasts={alertToasts}
            setAlertToasts={setAlertToasts}
            containerAutoCloseTime={time}
          />
        ))}

        {confirmToasts.map((toast) => (
          <ConfirmToast
            key={toast.id}
            toast={toast}
            setConfirmToasts={setConfirmToasts}
          />
        ))}
      </div>
    </>,
    document.body
  );
};

export default ToastContainer;
