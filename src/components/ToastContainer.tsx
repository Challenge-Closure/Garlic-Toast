import "./../styles/toast.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import EventBus from "../utils/eventBus";
import AlertToast from "./AlertToast";
import ConfirmToast from "./ConfirmToast";
import { ToastOptionType } from "../types/ToastType";

const initialState: Record<string, ToastOptionType[]> = {
  "t-l": [],
  "t-c": [],
  "t-r": [],
  "c-l": [],
  "c-c": [],
  "c-r": [],
  "b-l": [],
  "b-c": [],
  "b-r": []
};

interface ToastContainerProps {
  isFold: boolean;
  position: string;
  time: number;
}

const ToastContainer = ({ isFold, position = "t-r", time }: ToastContainerProps) => {
  const [alertToasts, setAlertToasts] = useState<any>(initialState);
  const [confirmToasts, setConfirmToasts] = useState<any[]>([]);

  useEffect(() => {
    const handleToastEvent = (toast: ToastOptionType) => {
      const toastPosition = toast.position ?? position;
      setAlertToasts((prevToasts: any) => {
        const updatedToasts = { ...prevToasts };

        isFold
          ? (updatedToasts[toastPosition] = [{ ...toast }, ...updatedToasts[toastPosition].slice(0, 2)])
          : (updatedToasts[toastPosition] = [{ ...toast }, ...updatedToasts[toastPosition]]);
        return updatedToasts;
      });
    };

    const handleConfirmToastEvent = (toast: any) => {
      const confirmToast = {
        id: Date.now(),
        ...toast,
        confirm: true
      };
      setConfirmToasts((prevToasts: any) => [confirmToast, ...prevToasts]);
    };

    EventBus.subscribe("SHOW_TOAST", handleToastEvent);
    EventBus.subscribe("SHOW_CONFIRM_TOAST", handleConfirmToastEvent);

    return () => {
      EventBus.unsubscribe("SHOW_TOAST");
      EventBus.unsubscribe("SHOW_CONFIRM_TOAST");
    };
  }, []);

  return createPortal(
    <>
      <div className={`toast-container`}>
        {Object.keys(alertToasts).map((position) => {
          const positionToasts = alertToasts[position];
          return (
            !!positionToasts.length && (
              <div className={`alert-container ${position} ${isFold && "isFold"}`} key={position}>
                {positionToasts.map((toast: ToastOptionType) => (
                  <AlertToast
                    key={toast.id}
                    toast={toast}
                    containerAutoCloseTime={time}
                    setAlertToasts={setAlertToasts}
                    position={position}
                  />
                ))}
              </div>
            )
          );
        })}

        {confirmToasts.map((toast: ToastOptionType) => (
          <ConfirmToast key={toast.id} toast={toast} setConfirmToasts={setConfirmToasts} />
        ))}
      </div>
    </>,
    document.body
  );
};

export default ToastContainer;
