const ConfirmToast = ({ toast, setConfirmToasts }) => {
  const handleConfirm = (id, resolve) => {
    setConfirmToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    resolve(true);
  };

  const handleCancel = (id, resolve) => {
    setConfirmToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    resolve(false);
  };
  
  return (
    <div
      className="toast"
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={(e) => {
        if (e.target.classList.contains("toast")) {
          handleCancel(toast.id, toast.resolve);
        }
      }}
    >
      <div className="innerBox">
        {toast.message}
        <div>
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
