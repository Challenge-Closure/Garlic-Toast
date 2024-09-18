import { useEffect, useRef } from 'react';

const AlertToast = ({ toast, position, setAlertToasts, time }) => {
  const timeoutRef = useRef(null);
  const timerRef = useRef(null);
  const remaindRef = useRef(null);

  const toastPosition = toast.position ?? position;
  useEffect(() => {
    if (toast.autoClose) {
      timerRef.current = Date.now() + (toast.duringTime ?? time);

      timeoutRef.current = setTimeout(() => {
        setAlertToasts((prevToasts) => {
          const updatedToasts = { ...prevToasts };

          updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t) => t.id !== toast.id)];
          return updatedToasts;
        });
      }, toast.duringTime ?? time);
    }
  }, []);

  const closeAlert = (targetId) => {
    setAlertToasts((prevToasts) => {
      const updatedToasts = { ...prevToasts };

      updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t) => t.id !== targetId)];
      return updatedToasts;
    });
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
      setAlertToasts((prevToasts) => {
        const updatedToasts = { ...prevToasts };

        updatedToasts[toastPosition] = [...updatedToasts[toastPosition].filter((t) => t.id !== toastId)];
        return updatedToasts;
      });
    }, remaindRef.current);
  };

  return (
    <div
      key={toast.id}
      className={`toast ${toast.type}`}
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => toast.closeOnClick && closeAlert(toast.id)}
      onMouseEnter={(e) => {
        toast.pauseOnHover && (e.target.classList.add('on'), stopTimeout());
      }}
      onMouseLeave={(e) => {
        toast.pauseOnHover && (e.target.classList.remove('on'), startTimeout(toast.id));
      }}>
      {toast.message}
      {toast.autoClose && (
        <div
          className="progress"
          style={{
            background: `var(--${toast.type}-text)`,
            animationDuration: `${toast.duringTime ?? time}ms`
          }}></div>
      )}
    </div>
  );
};

export default AlertToast;
