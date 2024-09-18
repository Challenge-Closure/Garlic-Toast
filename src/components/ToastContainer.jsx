import './../styles/toast.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import EventBus from '../utils/eventBus';
import AlertToast from './AlertToast';
import ConfirmToast from './ConfirmToast';

const initialState = {
  'top-left': [],
  'top-center': [],
  'top-right': [],
  'center-left': [],
  'center-center': [],
  'center-right': [],
  'right-left': [],
  'right-center': [],
  'right-right': []
};

const ToastContainer = ({ isFold, position, time }) => {
  const [alertToasts, setAlertToasts] = useState(initialState);
  const [confirmToasts, setConfirmToasts] = useState([]);

  useEffect(() => {
    const handleToastEvent = (toast) => {
      const toastPosition = toast.position ?? position;
      setAlertToasts((prevToasts) => {
        const updatedToasts = { ...prevToasts };

        isFold
          ? (updatedToasts[toastPosition] = [{ ...toast }, ...updatedToasts[toastPosition].slice(0, 2)])
          : (updatedToasts[toastPosition] = [{ ...toast }, ...updatedToasts[toastPosition]]);
        return updatedToasts;
      });
    };

    const handleConfirmToastEvent = (toast) => {
      const confirmToast = {
        id: Date.now(),
        ...toast,
        confirm: true
      };
      setConfirmToasts((prevToasts) => [confirmToast, ...prevToasts]);
    };

    EventBus.subscribe('SHOW_TOAST', handleToastEvent);
    EventBus.subscribe('SHOW_CONFIRM_TOAST', handleConfirmToastEvent);

    return () => EventBus.unsubscribe();
  }, []);

  return createPortal(
    <>
      <div className={`toast-container`}>
        {Object.keys(alertToasts).map((position) => {
          const positionToasts = alertToasts[position];
          return positionToasts.length > 0 ? (
            <div
              className={`alert-container ${position} ${isFold ? 'isFold' : null}`}
              key={position}
              onMouseEnter={(e) => e.target.classList.add('on')}
              onMouseLeave={(e) => e.target.classList.remove('on')}>
              {positionToasts.map((toast) => (
                <AlertToast
                  key={toast.id}
                  toast={toast}
                  time={time}
                  alertToasts={alertToasts}
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
