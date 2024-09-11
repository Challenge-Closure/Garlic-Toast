import "./../styles/tost.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import eventBus from "../utils/eventBus";

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToastEvent = (toast) => {
      setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...toast }]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, 1500);
    };

    const unsubscribe = eventBus.subscribe("SHOW_TOAST", handleToastEvent);

    return () => unsubscribe();
  }, []);

  return createPortal(
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <div key={index} className="toast">
          {toast.message}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default Toast;
