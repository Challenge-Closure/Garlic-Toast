import ToastContainer from "./components/ToastContainer";
import toast from "./utils/toast";

const App = () => {
  return (
    <div className="App">
      <ToastContainer position="t-c" time={5000} />
      <h1>First Sparta Open Sorce Library</h1>
      <div>
        <h2>기본 알림</h2>
        <button onClick={() => toast.alert("alert!", o8)}>toast.alert</button>
        <button onClick={() => toast.error("error!", o8)}>toast.error</button>
        <button onClick={() => toast.warning("warning!", o8)}>
          toast.warning
        </button>
        <button onClick={() => toast.info("info!", o8)}>toast.info</button>
        <button onClick={() => toast.success("success!", o8)}>
          toast.success
        </button>
        <button
          onClick={() => {
            toast.confirm("confirm?").then((res) => {
              if (res) {
                toast.alert("킹킹 준호님", o8);
              } else {
                toast.error("confirm cancel", o8);
              }
            });
          }}
        >
          toast.confirm
        </button>
      </div>
      <span>
        <h2>autoClose</h2>
        <button onClick={() => toast.warning("warning!", o1)}>fasle</button>
        <button onClick={() => toast.success("success!", o2)}>true</button>
      </span>
      <span>
        <h2>progressBar</h2>
        <button onClick={() => toast.warning("warning!", o3)}>fasle</button>
        <button onClick={() => toast.success("success!", o4)}>true</button>
      </span>
      <span>
        <h2>pauseOnHover</h2>
        <button onClick={() => toast.warning("warning!", o5)}>fasle</button>
        <button onClick={() => toast.success("success!", o6)}>true</button>
      </span>
      <span>
        <h2>closeOnClick</h2>
        <button onClick={() => toast.warning("warning!", o7)}>fasle</button>
        <button onClick={() => toast.success("success!", o8)}>true</button>
      </span>
    </div>
  );
};

export default App;

const o1 = {
  autoClose: false,
  progressBar: false,
  pauseOnHover: false,
  closeOnClick: true,
};
const o2 = {
  autoClose: true,
  progressBar: false,
  pauseOnHover: false,
  closeOnClick: true,
};
const o3 = {
  autoClose: true,
  progressBar: false,
  pauseOnHover: false,
  closeOnClick: false,
};
const o4 = {
  autoClose: true,
  progressBar: true,
  pauseOnHover: false,
  closeOnClick: false,
};
const o5 = {
  autoClose: true,
  progressBar: true,
  pauseOnHover: false,
  closeOnClick: false,
};
const o6 = {
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: false,
};
const o7 = {
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: false,
};
const o8 = {
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
