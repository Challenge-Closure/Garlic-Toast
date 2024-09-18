import "./../styles/tost.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import EventBus from "../utils/eventBus";

const ToastContainer = ({ position, time }) => {
  const [toasts, setToasts] = useState([]);
  const [confirmToasts, setConfirmToasts] = useState([]);

  const timeoutRef = useRef(null);
  const timerRef = useRef(null);
  const remaindRef = useRef(null);

  useEffect(() => {
    const handleToastEvent = (toast) => {
      setToasts((prevToasts) => [{ ...toast }, ...prevToasts.slice(0, 2)]);

      timerRef.current = Date.now() + time;

      timeoutRef.current = setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
      }, time);
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

  const stopTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      remaindRef.current = timerRef.current - Date.now();
    }
  };

  const startTimeout = () => {
    timerRef.current = Date.now() + remaindRef.current;
    setTimeout(() => {
      timeoutRef.current = setToasts((prevToasts) => prevToasts.slice(1));
    }, remaindRef.current);
  };

  const closeAlert = (targetId) => {
    setToasts(toasts.filter((toast) => toast.id !== targetId));
  };

  return createPortal(
    <>
      <div className={`toast-container ${position}`}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast ${toast.type}`}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onClick={() => closeAlert(toast.id)}
            onMouseOver={stopTimeout}
            onMouseOut={startTimeout}
            onMouseLeave={(e) => e.target.classList.remove("on")}
            onMouseEnter={(e) => e.target.classList.add("on")}
          >
            {toast.message}
            <div
              className="progress"
              style={{
                animationDuration: "3000ms",
              }}
            ></div>
          </div>
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
