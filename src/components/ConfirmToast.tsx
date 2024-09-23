import ToastTypeObj from "../types/ToastType";

interface ConfirmToastType {
  toast: ToastTypeObj;
  setConfirmToasts: Function;
}

const ConfirmToast = ({ toast, setConfirmToasts }: ConfirmToastType) => {
  const handleConfirm = (id: string, resolve: Function) => {
    setConfirmToasts((prevToasts: []) => prevToasts.filter((t: ToastTypeObj) => t.id !== id));
    resolve(true);
  };

  const handleCancel = (id: string, resolve: Function) => {
    setConfirmToasts((prevToasts: []) => prevToasts.filter((t: ToastTypeObj) => t.id !== id));
    resolve(false);
  };

  return (
    <div
      className="toast confirm-toast"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target.classList.contains("toast")) {
          handleCancel(toast.id, toast.resolve);
        }
      }}
    >
      <div className="inner-box">
        {toast.customImage ? <img src={toast.customImage} /> : null}
        <div className="message">{toast.message}</div>
        <div className="button-area">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleConfirm(toast.id, toast.resolve);
            }}
          >
            OK
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleCancel(toast.id, toast.resolve);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmToast;
