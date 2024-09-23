import { useEffect, useRef } from "react";
import ToastOptionType from "../types/ToastType";

interface AlertToastType {
  toast: ToastOptionType;
  containerAutoCloseTime: number;
  setAlertToasts: Function;
  position: string;
}

const AlertToast = ({ toast, position, setAlertToasts, containerAutoCloseTime }: AlertToastType) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<number>(0);
  const remaindRef = useRef<number>(0);

  const toastPosition = toast.position ?? position;
  useEffect(() => {
    if (toast.autoClose) {
      timerRef.current = Date.now() + (toast.autoCloseTime ?? containerAutoCloseTime);

      timeoutRef.current = setTimeout(() => {
        setAlertToasts((prevToasts: any) => {
          const updatedToasts = { ...prevToasts };

          updatedToasts[toastPosition] = [
            ...updatedToasts[toastPosition].filter((t: ToastOptionType) => t.id !== toast.id)
          ];
          return updatedToasts;
        });
      }, toast.autoCloseTime ?? containerAutoCloseTime);
    }
  }, []);

  const closeAlert = (targetId: any) => {
    setAlertToasts((prevToasts: any) => {
      const updatedToasts = { ...prevToasts };

      updatedToasts[toastPosition] = [
        ...updatedToasts[toastPosition].filter((t: ToastOptionType) => t.id !== targetId)
      ];
      return updatedToasts;
    });
  };

  const stopTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      remaindRef.current = timerRef.current - Date.now();
    }
  };

  const startTimeout = (toastId: any) => {
    timerRef.current = Date.now() + remaindRef.current;
    timeoutRef.current = setTimeout(() => {
      setAlertToasts((prevToasts: any) => {
        const updatedToasts = { ...prevToasts };

        updatedToasts[toastPosition] = [
          ...updatedToasts[toastPosition].filter((t: ToastOptionType) => t.id !== toastId)
        ];
        return updatedToasts;
      });
    }, remaindRef.current);
  };

  return (
    <>
      <div
        className={`toast ${toast.type}`}
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
          <div className="message">{toast.message}</div>
        </div>
        {toast.autoClose && toast.progressBar && (
          <div
            className="progress"
            style={{
              background: `var(--${toast.type}-text)`,
              animationDuration: `${toast.autoCloseTime ?? containerAutoCloseTime}ms`
            }}
          ></div>
        )}
        <span
          className="toast-close"
          style={{
            color: `var(--${toast.type}-text)`
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
