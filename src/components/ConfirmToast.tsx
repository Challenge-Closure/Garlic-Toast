import { ToastOptionType } from "../types/ToastType";

interface ConfirmToastType {
  toast: ToastOptionType;
  setConfirmToasts: Function;
}

const ConfirmToast = ({ toast, setConfirmToasts }: ConfirmToastType) => {
  const handleConfirm = (id: any, resolve: any) => {
    setConfirmToasts((prevToasts: []) => prevToasts.filter((t: ToastOptionType) => t.id !== id));
    resolve(true);
  };

  const handleCancel = (id: any, resolve: any) => {
    setConfirmToasts((prevToasts: []) => prevToasts.filter((t: ToastOptionType) => t.id !== id));
    resolve(false);
  };

  return (
    <div
      className="toast confirm-toast"
      onClick={(e) => {
        if (e.currentTarget.classList.contains("toast")) {
          handleCancel(toast.id, toast.resolve);
        }
      }}
    >
      <div className="inner-box">
        {toast.customImage && <img src={toast.customImage} />}
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
