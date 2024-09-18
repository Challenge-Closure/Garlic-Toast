import ToastContainer from "./components/ToastContainer";
import toast from "./utils/toast";

const App = () => {
  const toastAlert = () => {
    toast.alert("alert!", {
      autoClose: true,
      hideProgressBar: true,
      progress: undefined,
      pauseOnHover: true,
      closeOnClick: true,
      // position: "top-center",
      // draggable: true,
      // theme: "light",
      // transition: Bounce,
    });
  };
  const toastError = () => {
    toast.error("error!");
  };
  const toastWarning = () => {
    toast.warning("warning!");
  };
  const toastInfo = () => {
    toast.info("info!");
  };
  const toastSuccess = () => {
    toast.success("success!");
  };
  return (
    <div className="App">
      <ToastContainer position="top-center" time={5000} />
      <h1>First Sparta Open Sorce Library</h1>
      <button onClick={() => toastAlert()}>알림</button>
      <button onClick={() => toastError()}>에러</button>
      <button onClick={() => toastWarning()}>경고</button>
      <button onClick={() => toastInfo()}>정보</button>
      <button onClick={() => toastSuccess()}>성공</button>
      <button
        onClick={() => {
          toast.confirm("Do you want to proceed?").then((res) => {
            if (res) {
              console.log("킹킹 GPT");
            }
          });
        }}
      >
        Show Confirm Toast
      </button>
    </div>
  );
};

export default App;

// alert
// error
// success
// info
// confirm
// promise

// 종속성X
// 복잡성X
// 사용 실용성, 디자인
