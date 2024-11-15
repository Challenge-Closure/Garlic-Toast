import "./../styles/toast.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import EventBus from "../utils/eventBus";
import AlertToast from "./AlertToast";
import ConfirmToast from "./ConfirmToast";
import type { ConfirmEvent, PositionedToast, ToastEvent, ToastPosition } from "../types/toastType";
import { SHOW_CONFIRM_TOAST, SHOW_TOAST } from "../constants/topic";

const initialState: PositionedToast = {
  "t-l": [],
  "t-c": [],
  "t-r": [],
  "c-l": [],
  "c-c": [],
  "c-r": [],
  "b-l": [],
  "b-c": [],
  "b-r": [],
};

type ToastContainerProps = {
  isFold: boolean;
  position: ToastPosition;
  time: number;
};

const ToastContainer = ({ isFold, position = "t-r", time = 5000 }: Partial<ToastContainerProps>) => {
  const [alertToasts, setAlertToasts] = useState<PositionedToast>(initialState);
  const [confirmToasts, setConfirmToasts] = useState<ConfirmEvent[]>([]);

  useEffect(() => {
    const handleToastEvent = (event: ToastEvent) => {
      const toastPosition = event.position ?? position;
      setAlertToasts((prevToasts: PositionedToast) => {
        const updatedToasts = { ...prevToasts };

        isFold
          ? (updatedToasts[toastPosition] = [{ ...event }, ...updatedToasts[toastPosition].slice(0, 2)])
          : (updatedToasts[toastPosition] = [{ ...event }, ...updatedToasts[toastPosition]]);
        return updatedToasts;
      });
    };

    const handleConfirmToastEvent = (event: ConfirmEvent) => {
      setConfirmToasts((prevToasts) => [event, ...prevToasts]);
    };

    //FIXME - 타입 오류
    EventBus.subscribe(SHOW_TOAST, handleToastEvent);
    EventBus.subscribe(SHOW_CONFIRM_TOAST, handleConfirmToastEvent);

    return () => {
      EventBus.unsubscribe(SHOW_TOAST);
      EventBus.unsubscribe(SHOW_CONFIRM_TOAST);
    };
  }, []);

  if (typeof window === "undefined") return;

  const alertToastKeys = Object.keys(alertToasts) as unknown as ToastPosition[];
  return createPortal(
    <>
      <div className={`toast-container`}>
        {alertToastKeys.map((position) => {
          const positionToasts = alertToasts[position];
          return (
            !!positionToasts.length && (
              <div className={`alert-container ${position} ${isFold && "isFold"}`} key={position}>
                {positionToasts.map((toast: ToastEvent) => (
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

        {confirmToasts.map((toast: ConfirmEvent) => (
          <ConfirmToast key={toast.id} toast={toast} setConfirmToasts={setConfirmToasts} />
        ))}
      </div>
    </>,
    document.body
  );
};

export default ToastContainer;
