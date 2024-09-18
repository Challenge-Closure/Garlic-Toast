import ToastContainer from "./components/ToastContainer";
import toast from "./utils/toast";

const App = () => {
  return (
    <>
      <ToastContainer isFold={true} position="t-r" time={5000} />
      <h1>First Sparta Open Sorce Library</h1>
      <div id="guide">
        <span className="cell">
          <h2>기본 알림</h2>
          <span id="common-alert">
            <span>
              <button onClick={() => toast.alert("alert!", o8)}>
                toast.alert
              </button>
              <button onClick={() => toast.success("success!", o8)}>
                toast.success
              </button>
            </span>
            <span>
              <button onClick={() => toast.warning("warning!", o8)}>
                toast.warning
              </button>
              <button onClick={() => toast.info("info!", o8)}>
                toast.info
              </button>
            </span>
            <span>
              <button onClick={() => toast.error("error!", o8)}>
                toast.error
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
            </span>
          </span>
        </span>
        <span className="cell">
          <h2>autoClose</h2>

          <button onClick={() => toast.warning("warning!", o1)}>fasle</button>
          <button onClick={() => toast.success("success!", o2)}>true</button>
        </span>
        <span className="cell">
          <h2>progressBar</h2>
          <button onClick={() => toast.warning("warning!", o3)}>fasle</button>
          <button onClick={() => toast.success("success!", o4)}>true</button>
        </span>
        <span className="cell">
          <h2>pauseOnHover</h2>
          <button onClick={() => toast.warning("warning!", o5)}>fasle</button>
          <button onClick={() => toast.success("success!", o6)}>true</button>
        </span>
        <span className="cell">
          <h2>closeOnClick</h2>
          <button onClick={() => toast.warning("warning!", o7)}>fasle</button>
          <button onClick={() => toast.success("success!", o8)}>true</button>
        </span>
      </div>
      <div id="grid-wrap">
        <div id="grid-container" className="App">
          <span className="cell">
            <button onClick={() => toast.warning("warning!", tl)}>t-l</button>
          </span>

          <span className="cell">
            <button onClick={() => toast.warning("warning!", tc)}>t-c</button>
          </span>

          <span className="cell">
            <button onClick={() => toast.warning("warning!", tr)}>t-r</button>
          </span>

          <span className="cell">
            <button onClick={() => toast.warning("warning!", cl)}>c-l</button>
          </span>
          <span className="cell">
            <button onClick={() => toast.warning("warning!", cc)}>c-c</button>
          </span>
          <span className="cell">
            <button onClick={() => toast.warning("warning!", cr)}>c-r</button>
          </span>

          <span className="cell">
            <button onClick={() => toast.warning("warning!", bl)}>b-l</button>
          </span>
          <span className="cell">
            <button onClick={() => toast.warning("warning!", bc)}>b-c</button>
          </span>
          <span className="cell">
            <button onClick={() => toast.warning("warning!", br)}>b-r</button>
          </span>
        </div>
      </div>
    </>
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
const tl = {
  position: "t-l",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const tc = {
  position: "t-c",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const tr = {
  position: "t-r",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const cl = {
  position: "c-l",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const cc = {
  position: "c-c",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const cr = {
  position: "c-r",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const bl = {
  position: "b-l",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const bc = {
  position: "b-c",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
const br = {
  position: "b-r",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
};
