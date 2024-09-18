import { useEffect, useRef } from "react";

const AlertToast = ({
  toast,
  alertToasts,
  setAlertToasts,
  containerAutoCloseTime,
}) => {
  const timeoutRef = useRef(null);
  const timerRef = useRef(null);
  const remaindRef = useRef(null);

  useEffect(() => {
    if (toast.autoClose) {
      timerRef.current =
        Date.now() + (toast.autoCloseTime ?? containerAutoCloseTime);

      timeoutRef.current = setTimeout(() => {
        setAlertToasts((prevToasts) =>
          prevToasts.filter((t) => t.id !== toast.id)
        );
      }, toast.autoCloseTime ?? containerAutoCloseTime);
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
        toast.autoClose &&
          toast.pauseOnHover &&
          (e.target.classList.add("on"), stopTimeout());
      }}
      onMouseLeave={(e) => {
        toast.autoClose &&
          toast.pauseOnHover &&
          (e.target.classList.remove("on"), startTimeout(toast.id));
      }}
    >
      {toast.message}
      {toast.autoClose && !toast.hideProgressBar && (
        <div
          className="progress"
          style={{
            animationDuration: `${
              toast.autoCloseTime ?? containerAutoCloseTime
            }ms`,
          }}
        ></div>
      )}
    </div>
  );
};

export default AlertToast;
