import { useEffect, useRef } from "react";
import type { PositionedToast, ToastEvent, ToastPosition } from "../types/toastType";

type AlertToastProps = {
  toast: ToastEvent;
  containerAutoCloseTime: number;
  setAlertToasts: React.Dispatch<React.SetStateAction<PositionedToast>>;
  position: ToastPosition;
};

type Timer = {
  setTimeout: NodeJS.Timeout | null;
  remaind: number;
  timer: number;
};

const AlertToast = ({ toast, position, setAlertToasts, containerAutoCloseTime }: AlertToastProps) => {
  const timerRef = useRef<Timer>({ setTimeout: null, remaind: 0, timer: 0 });

  const toastPosition = toast.position ?? position;
  useEffect(() => {
    if (toast.autoClose) {
      timerRef.current.timer = Date.now() + (toast.autoCloseTime ?? containerAutoCloseTime);

      timerRef.current.setTimeout = setTimeout(() => {
        setAlertToasts((prevToasts) => {
          const updatedToasts = { ...prevToasts };

          updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t: ToastEvent) => t.id !== toast.id)];
          return updatedToasts;
        });
      }, toast.autoCloseTime ?? containerAutoCloseTime);
    }
  }, []);

  const closeAlert = (targetId: number) => {
    setAlertToasts((prevToasts) => {
      const updatedToasts = { ...prevToasts };

      updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t: ToastEvent) => t.id !== targetId)];
      return updatedToasts;
    });
  };

  const stopTimeout = () => {
    if (timerRef.current.setTimeout) {
      clearTimeout(timerRef.current.setTimeout);
      timerRef.current.remaind = timerRef.current.timer - Date.now();
    }
  };

  const startTimeout = (toastId: number) => {
    timerRef.current.timer = Date.now() + timerRef.current.remaind;
    timerRef.current.setTimeout = setTimeout(() => {
      setAlertToasts((prevToasts) => {
        const updatedToasts = { ...prevToasts };

        updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t: ToastEvent) => t.id !== toastId)];
        return updatedToasts;
      });
    }, timerRef.current.remaind);
  };

  return (
    <>
      <div
        className={`toast ${toast.type}`}
        style={{ background: toast.color }}
        onClick={() => toast.closeOnClick && closeAlert(toast.id)}
        onMouseEnter={(e) => {
          toast.autoClose && toast.pauseOnHover && (e.currentTarget.classList.add("on"), stopTimeout());
        }}
        onMouseLeave={(e) => {
          toast.autoClose && toast.pauseOnHover && (e.currentTarget.classList.remove("on"), startTimeout(toast.id));
        }}
      >
        <div className="inner">
          {toast.customImage ? <img src={toast.customImage} /> : null}
          <div className="message" style={{ color: toast.textColor, width: toast.width, height: toast.height }}>
            {toast.message}
          </div>
        </div>
        {toast.autoClose && toast.progressBar && (
          <div
            className="progress"
            style={{
              background: toast.barColor || `var(--${toast.type}-text)`,
              animationDuration: `${toast.autoCloseTime ?? containerAutoCloseTime}ms`,
            }}
          ></div>
        )}
        <span
          className="toast-close"
          style={{
            color: toast.textColor || `var(--${toast.type}-text)`,
          }}
          onClick={() => closeAlert(toast.id)}
        >
          X
        </span>
      </div>
    </>
  );
};

export default AlertToast;
