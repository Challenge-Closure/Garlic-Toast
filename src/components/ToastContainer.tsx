import "./../styles/toast.css";
import { useEffect, useLayoutEffect, useState } from "react";
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
  const [isClient, setIsClient] = useState(false); // 클라이언트 렌더링 여부 체크

  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setIsClient(true); // 브라우저 환경임을 확인

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

    EventBus.subscribe(SHOW_TOAST, handleToastEvent as any);
    EventBus.subscribe(SHOW_CONFIRM_TOAST, handleConfirmToastEvent as any);

    return () => {
      EventBus.unsubscribe(SHOW_TOAST);
      EventBus.unsubscribe(SHOW_CONFIRM_TOAST);
    };
  }, []);

  if (!isClient) return null;

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
