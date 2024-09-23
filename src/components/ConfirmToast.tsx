const ConfirmToast = ({ toast, setConfirmToasts }:any) => {
  const handleConfirm = (id:string, resolve:any) => {
    setConfirmToasts((prevToasts:any) => prevToasts.filter((t:any) => t.id !== id));
    resolve(true);
  };

  const handleCancel = (id:string, resolve:any) => {
    setConfirmToasts((prevToasts:any) => prevToasts.filter((t:any) => t.id !== id));
    resolve(false);
  };

  return (
    <div
      className="toast confirm-toast"
      onClick={(e) => {
        if (e.currentTarget.classList.contains('toast')) {
          handleCancel(toast.id, toast.resolve);
        }
      }}>
      <div className="inner-box">
        {toast.customImage ? <img src={toast.customImage} /> : null}
        <div className="message">{toast.message}</div>
        <div className="button-area">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleConfirm(toast.id, toast.resolve);
            }}>
            OK
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleCancel(toast.id, toast.resolve);
            }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmToast;
