import "./../styles/toast.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import EventBus from "../utils/eventBus";
import AlertToast from "./AlertToast";
import ConfirmToast from "./ConfirmToast";
import ToastTypeObj from "../types/ToastType";

interface InitiolStateType {
  "t-l": object[];
  "t-c": object[];
  "t-r": object[];
  "c-l": object[];
  "c-c": object[];
  "c-r": object[];
  "b-l": object[];
  "b-c": object[];
  "b-r": object[];
}
const initialState = {
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
  const [alertToasts, setAlertToasts] = useState<InitiolStateType>(initialState);
  const [confirmToasts, setConfirmToasts] = useState<any[]>([]);

  useEffect(() => {
    const handleToastEvent = (toast: any) => {
      const toastPosition = toast.position ?? position;
      setAlertToasts((prevToasts) => {
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
      setConfirmToasts((prevToasts) => [confirmToast, ...prevToasts]);
    };

    EventBus.subscribe("SHOW_TOAST", handleToastEvent);
    EventBus.subscribe("SHOW_CONFIRM_TOAST", handleConfirmToastEvent);

    return () => EventBus.unsubscribe();
  }, []);

  return createPortal(
    <>
      <div className={`toast-container`}>
        {Object.keys(alertToasts).map((position) => {
          const positionToasts = alertToasts[position];
          return positionToasts.length > 0 ? (
            <div className={`alert-container ${position} ${isFold && "isFold"}`} key={position}>
              {positionToasts.map((toast: ToastTypeObj) => (
                <AlertToast
                  key={toast.id}
                  toast={toast}
                  containerAutoCloseTime={time}
                  setAlertToasts={setAlertToasts}
                  position={position}
                />
              ))}
            </div>
          ) : null;
        })}

        {confirmToasts.map((toast) => (
          <ConfirmToast key={toast.id} toast={toast} setConfirmToasts={setConfirmToasts} />
        ))}
      </div>
    </>,
    document.body
  );
};

export default ToastContainer;
