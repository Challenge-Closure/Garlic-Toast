import "./../styles/tost.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import EventBus from "../utils/eventBus";
import AlertToast from "./AlertToast";

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

  const handleConfirm = (id, resolve) => {
    setConfirmToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    resolve(true);
  };

  const handleCancel = (id, resolve) => {
    setConfirmToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    resolve(false);
  };

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
          <div
            key={toast.id}
            className="toast"
            style={{
              width: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => {
              if (e.target.classList.contains("toast")) {
                handleCancel(toast.id, toast.resolve);
              }
            }}
          >
            <div className="innerBox">
              {toast.message}
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleConfirm(toast.id, toast.resolve);
                  }}
                >
                  OK
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCancel(toast.id, toast.resolve);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>,
    document.body
  );
};

export default ToastContainer;
