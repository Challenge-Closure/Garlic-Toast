import { useEffect, useRef } from "react";
import ToastTypeObj from "../types/ToastType";

interface AlertToastType {
  toast: ToastTypeObj;
  containerAutoCloseTime: number;
  setAlertToasts: Function;
  position: string;
}

const AlertToast = ({ toast, position, setAlertToasts, containerAutoCloseTime }: AlertToastType) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const remaindRef = useRef<number | undefined>(undefined);

  const toastPosition = toast.position ?? position;
  useEffect(() => {
    if (toast.autoClose) {
      timerRef.current = Date.now() + (toast.autoCloseTime ?? containerAutoCloseTime);

      timeoutRef.current = setTimeout(() => {
        setAlertToasts((prevToasts: []) => {
          const updatedToasts = { ...prevToasts };

          updatedToasts[toastPosition] = [
            ...updatedToasts[toastPosition].filter((t: ToastTypeObj) => t.id !== toast.id)
          ];
          return updatedToasts;
        });
      }, toast.autoCloseTime ?? containerAutoCloseTime);
    }
  }, []);

  const closeAlert = (targetId: string) => {
    setAlertToasts((prevToasts: any) => {
      const updatedToasts = { ...prevToasts };

      updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t: ToastTypeObj) => t.id !== targetId)];
      return updatedToasts;
    });
  };

  const stopTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      remaindRef.current = timerRef.current - Date.now();
    }
  };

  const startTimeout = (toastId: string) => {
    timerRef.current = Date.now() + remaindRef.current;
    timeoutRef.current = setTimeout(() => {
      setAlertToasts((prevToasts: any) => {
        const updatedToasts = { ...prevToasts };

        updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t: any) => t.id !== toastId)];
        return updatedToasts;
      });
    }, remaindRef.current);
  };

  return (
    <>
      <div
        className={`toast ${toast.type}`}
        onClick={() => toast.closeOnClick && closeAlert(toast.id)}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          toast.autoClose && toast.pauseOnHover && (e.target.classList.add("on"), stopTimeout());
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          toast.autoClose && toast.pauseOnHover && (e.target.classList.remove("on"), startTimeout(toast.id));
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
