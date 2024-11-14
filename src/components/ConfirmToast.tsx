import { ToastOption } from "../types/ToastType";

type ConfirmToastType = {
  toast: ToastOption;
  setConfirmToasts: Function;
};

const ConfirmToast = ({ toast, setConfirmToasts }: ConfirmToastType) => {
  const handleConfirm = (id, resolve) => {
    setConfirmToasts((prevToasts: []) => prevToasts.filter((t: ToastOption) => t.id !== id));
    resolve(true);
  };

  const handleCancel = (id, resolve) => {
    setConfirmToasts((prevToasts: []) => prevToasts.filter((t: ToastOption) => t.id !== id));
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
      <div className="inner-box" style={{ backgroundColor: toast.color }}>
        {toast.customImage && <img src={toast.customImage} />}
        <div className="message" style={{ color: toast.textColor }}>
          {toast.message}
        </div>
        <div className="button-area">
          <button
            style={{ color: toast.confirmBtnColor }}
            onClick={(e) => {
              e.preventDefault();
              handleConfirm(toast.id, toast.resolve);
            }}
          >
            {toast.confirmBtn || "OK"}
          </button>
          <button
            style={{ color: toast.cancleBtnColor }}
            onClick={(e) => {
              e.preventDefault();
              handleCancel(toast.id, toast.resolve);
            }}
          >
            {toast.cancleBtn || "Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmToast;
