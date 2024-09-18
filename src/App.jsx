import ToastContainer from './components/ToastContainer';
import toast from './utils/toast';

const App = () => {
  const toastAlert = () => {
    toast.alert('alert!', {
      autoClose: true,
      hideProgressBar: true,
      pauseOnHover: true,
      closeOnClick: true,

      autoCloseTime: 5000,
      position: 't-c'
    });
  };
  const toastError = () => {
    toast.error('error!', {
      autoClose: true,
      hideProgressBar: true,
      progress: undefined,
      pauseOnHover: true,
      closeOnClick: true,

      autoCloseTime: 5000
    });
  };
  const toastWarning = () => {
    toast.warning('warning!', {
      autoClose: true,
      hideProgressBar: true,
      pauseOnHover: true,
      closeOnClick: true,

      autoCloseTime: 5000
    });
  };
  const toastInfo = () => {
    toast.info('info!', {
      autoClose: true,
      hideProgressBar: true,
      pauseOnHover: false,
      closeOnClick: true,

      autoCloseTime: 5000
    });
  };
  const toastSuccess = () => {
    toast.success('successsuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccesssuccess!', {
      autoClose: false,
      hideProgressBar: true,
      pauseOnHover: true,
      closeOnClick: true,
      autoCloseTime: 5000
    });
  };
  return (
    <div className="App">
      <ToastContainer isFold={true} position="t-r" time={3000} />
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
              toast.alert('킹킹 준호님');
            } else {
              toast.error('취소');
            }
          });
        }}>
        Show Confirm Toast
      </button>
    </div>
  );
};

export default App;
