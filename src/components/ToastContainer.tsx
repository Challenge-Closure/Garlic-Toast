import "./../styles/toast.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import EventBus from "../utils/eventBus";
import AlertToast from "./AlertToast";
import ConfirmToast from "./ConfirmToast";
import { ToastOption, type ToastPosition, type ToastType } from "../types/ToastType";
import { SHOW_CONFIRM_TOAST, SHOW_TOAST } from "../constants/topic";

type TempType = Record<ToastPosition, ToastOption[]>;

const initialState: TempType = {
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

type confirm = {
  autoClose: boolean;
  closeOnClick: boolean;
  confirm: boolean;
  customImage: string | undefined;
  id?: string | number | undefined;
  message: string;
  pauseOnHover: boolean;
  progressBar: boolean;
  resolve: Function;
  type: ToastType;
};

type ToastContainerProps = {
  isFold: boolean;
  position: ToastPosition;
  time: number;
};

const ToastContainer = ({ isFold, position = "t-r", time = 5000 }: Partial<ToastContainerProps>) => {
  const [alertToasts, setAlertToasts] = useState<TempType>(initialState);
  const [confirmToasts, setConfirmToasts] = useState<confirm[]>([]);

  const isomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  isomorphicLayoutEffect(() => {
    const handleToastEvent = (toast: ToastOption) => {
      const toastPosition = toast.position ?? position;
      setAlertToasts((prevToasts: TempType) => {
        const updatedToasts = { ...prevToasts };

        isFold
          ? (updatedToasts[toastPosition] = [{ ...toast }, ...updatedToasts[toastPosition].slice(0, 2)])
          : (updatedToasts[toastPosition] = [{ ...toast }, ...updatedToasts[toastPosition]]);
        return updatedToasts;
      });
    };

    const handleConfirmToastEvent = (toast: confirm) => {
      const confirmToast = {
        id: Date.now(),
        ...toast,
        confirm: true,
      };
      setConfirmToasts((prevToasts) => [confirmToast, ...prevToasts]);
    };

    EventBus.subscribe(SHOW_TOAST, handleToastEvent);
    EventBus.subscribe(SHOW_CONFIRM_TOAST, handleConfirmToastEvent);

    return () => {
      EventBus.unsubscribe(SHOW_TOAST);
      EventBus.unsubscribe(SHOW_CONFIRM_TOAST);
    };
  }, []);

  const alertToastKeys = Object.keys(alertToasts) as unknown as ToastPosition[];

  return createPortal(
    <>
      <div className={`toast-container`}>
        {alertToastKeys.map((position) => {
          const positionToasts = alertToasts[position];
          return (
            !!positionToasts.length && (
              <div className={`alert-container ${position} ${isFold && "isFold"}`} key={position}>
                {positionToasts.map((toast: ToastOption) => (
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

        {confirmToasts.map((toast: ToastOption) => (
          <ConfirmToast key={toast.id} toast={toast} setConfirmToasts={setConfirmToasts} />
        ))}
      </div>
    </>,
    document.body
  );
};

export default ToastContainer;
