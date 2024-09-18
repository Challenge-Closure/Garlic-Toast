import ToastContainer from './components/ToastContainer';
import toast from './utils/toast';

const App = () => {
  const toastAlert = () => {
    toast.alert('alert!', {
      autoClose: true,
      hideProgressBar: true,
      progress: undefined,
      pauseOnHover: true,
      closeOnClick: true,
      duringTime: 5000,
      position: 'top-center'
      // draggable: true,
      // theme: "light",
      // transition: Bounce,
    });
  };
  const toastError = () => {
    toast.error('error!', {
      autoClose: true,
      hideProgressBar: true,
      progress: undefined,
      pauseOnHover: true,
      closeOnClick: true,
      duringTime: 5000
      // position: "top-center",
      // draggable: true,
      // theme: "light",
      // transition: Bounce,
    });
  };
  const toastWarning = () => {
    toast.warning('warning!', {
      autoClose: true,
      hideProgressBar: true,
      progress: undefined,
      pauseOnHover: true,
      closeOnClick: true,
      duringTime: 5000
      // position: "top-center",
      // draggable: true,
      // theme: "light",
      // transition: Bounce,
    });
  };
  const toastInfo = () => {
    toast.info('info!', {
      autoClose: true,
      hideProgressBar: true,
      progress: undefined,
      pauseOnHover: false,
      closeOnClick: true,
      duringTime: 5000
      // position: "top-center",
      // draggable: true,
      // theme: "light",
      // transition: Bounce,
    });
  };
  const toastSuccess = () => {
    toast.success('successsuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccess!', {
      autoClose: false,
      hideProgressBar: true,
      progress: undefined,
      pauseOnHover: true,
      closeOnClick: true,
      duringTime: 5000
      // position: "top-center",
      // draggable: true,
      // theme: "light",
      // transition: Bounce,
    });
  };
  return (
    <div className="App">
      <ToastContainer isFold={true} position="top-right" time={3000} />
      <h1>First Sparta Open Sorce Library</h1>
      <button onClick={() => toastAlert()}>알림</button>
      <button onClick={() => toastError()}>에러</button>
      <button onClick={() => toastWarning()}>경고</button>
      <button onClick={() => toastInfo()}>정보</button>
      <button onClick={() => toastSuccess()}>성공</button>
      <button
        onClick={() => {
          toast.confirm('Do you want to proceed?').then((res) => {
            if (res) {
              console.log('킹킹 GPT');
            }
          });
        }}>
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
