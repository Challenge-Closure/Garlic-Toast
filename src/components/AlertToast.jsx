import { useEffect, useRef } from "react";

const AlertToast = ({ toast, alertToasts, setAlertToasts, time }) => {
  const timeoutRef = useRef(null);
  const timerRef = useRef(null);
  const remaindRef = useRef(null);

  useEffect(() => {
    if (toast.autoClose) {
      timerRef.current = Date.now() + (toast.duringTime ?? time);

      timeoutRef.current = setTimeout(() => {
        setAlertToasts((prevToasts) =>
          prevToasts.filter((t) => t.id !== toast.id)
        );
      }, toast.duringTime ?? time);
    }
  }, []);

  const closeAlert = (targetId) => {
    setAlertToasts(alertToasts.filter((toast) => toast.id !== targetId));
  };

  const stopTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      remaindRef.current = timerRef.current - Date.now();
    }
  };

  const startTimeout = (toastId) => {
    timerRef.current = Date.now() + remaindRef.current;
    timeoutRef.current = setTimeout(() => {
      setAlertToasts((prevToasts) =>
        prevToasts.filter((t) => t.id !== toastId)
      );
    }, remaindRef.current);
  };

  return (
    <div
      key={toast.id}
      className={`toast ${toast.type}`}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => toast.closeOnClick && closeAlert(toast.id)}
      onMouseEnter={(e) => {
        toast.pauseOnHover && (e.target.classList.add("on"), stopTimeout());
      }}
      onMouseLeave={(e) => {
        toast.pauseOnHover &&
          (e.target.classList.remove("on"), startTimeout(toast.id));
      }}
    >
      {toast.message}
      {toast.autoClose && (
        <div
          className="progress"
          style={{
            animationDuration: `${toast.duringTime ?? time}ms`,
          }}
        ></div>
      )}
    </div>
  );
};

export default AlertToast;
