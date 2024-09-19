import { useState } from "react";
import ToastContainer from "./components/ToastContainer";
import toast from "./utils/toast";

const initialState = {
  type: "alert",
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
  customImage: false,
};

const App = () => {
  const [option, setOption] = useState(initialState);

  const buttonClick = (e, key, value) => {
    if (document.querySelectorAll(`.${key}-on`).length !== 0) {
      document.querySelector(`.${key}-on`).classList.remove(`${key}-on`);
    }
    e.target.classList.add(`${key}-on`);
    setOption({ ...option, [key]: value });
  };

  const showToastButton = (position) => {
    if (option.type === "alert") {
      toast.alert("alert message!", {
        ...option,
        type: "normal",
        position: position,
      });
    } else if (option.type === "success") {
      toast.success("success message!", { ...option, position: position });
    } else if (option.type === "warning") {
      toast.warning("warning message!", { ...option, position: position });
    } else if (option.type === "error") {
      toast.error("error message!", { ...option, position: position });
    } else if (option.type === "info") {
      toast.info("info message!", { ...option, position: position });
    } else if (option.type === "confirm") {
      toast.confirm("confirm?").then((res) => {
        if (res) {
          toast.alert("킹킹 준호님", { ...option });
        } else {
          toast.error("confirm cancel", {
            ...option,
            type: "error",
            position: position,
          });
        }
      });
    }
  };

  return (
    <>
      <ToastContainer isFold={true} position="t-r" time={5000} />
      <h1>First Sparta Open Sorce Library</h1>
      <div id="option">
        <span className="cell">
          <h2>기본 알림</h2>
          <span id="common-alert">
            <span>
              <button
                className="type-on"
                onClick={(e) => buttonClick(e, "type", "alert")}
              >
                alert
              </button>
              <button onClick={(e) => buttonClick(e, "type", "success")}>
                success
              </button>
            </span>
            <span>
              <button onClick={(e) => buttonClick(e, "type", "warning")}>
                warning
              </button>
              <button onClick={(e) => buttonClick(e, "type", "info")}>
                info
              </button>
            </span>
            <span>
              <button onClick={(e) => buttonClick(e, "type", "error")}>
                error
              </button>

              <button
                onClick={(e) => {
                  buttonClick(e, "type", "confirm");
                }}
              >
                confirm
              </button>
            </span>
          </span>
        </span>
        <span className="cell">
          <h2>autoClose</h2>

          <button onClick={(e) => buttonClick(e, "autoClose", false)}>
            false
          </button>
          <button
            className="autoClose-on"
            onClick={(e) => buttonClick(e, "autoClose", true)}
          >
            true
          </button>
        </span>
        <span className="cell">
          <h2>progressBar</h2>
          <button onClick={(e) => buttonClick(e, "progressBar", false)}>
            false
          </button>
          <button
            className="progressBar-on"
            onClick={(e) => buttonClick(e, "progressBar", true)}
          >
            true
          </button>
        </span>
        <span className="cell">
          <h2>pauseOnHover</h2>
          <button onClick={(e) => buttonClick(e, "pauseOnHover", false)}>
            false
          </button>
          <button
            className="pauseOnHover-on"
            onClick={(e) => buttonClick(e, "pauseOnHover", true)}
          >
            true
          </button>
        </span>
        <span className="cell">
          <h2>closeOnClick</h2>
          <button onClick={(e) => buttonClick(e, "closeOnClick", false)}>
            false
          </button>
          <button
            className="closeOnClick-on"
            onClick={(e) => buttonClick(e, "closeOnClick", true)}
          >
            true
          </button>
        </span>
        <span className="cell">
          <h2>customImage</h2>
          <button
            className="customImage-on"
            onClick={(e) => buttonClick(e, "customImage", false)}
          >
            false
          </button>
          <button
            onClick={(e) =>
              buttonClick(
                e,
                "customImage",
                "https://online.spartacodingclub.kr/assets/images/profile/rtan_thumb_01.png"
              )
            }
          >
            true
          </button>
        </span>
      </div>
      <div id="grid-wrap">
        <div id="grid-container" className="App">
          <span className="cell">
            <button onClick={() => showToastButton("t-l")}>t-l</button>
          </span>

          <span className="cell">
            <button onClick={() => showToastButton("t-c")}>t-c</button>
          </span>

          <span className="cell">
            <button onClick={() => showToastButton("t-r")}>t-r</button>
          </span>

          <span className="cell">
            <button onClick={() => showToastButton("c-l")}>c-l</button>
          </span>
          <span className="cell">
            <button onClick={() => showToastButton("c-c")}>c-c</button>
          </span>
          <span className="cell">
            <button onClick={() => showToastButton("c-r")}>c-r</button>
          </span>

          <span className="cell">
            <button onClick={() => showToastButton("b-l")}>b-l</button>
          </span>
          <span className="cell">
            <button onClick={() => showToastButton("b-c")}>b-c</button>
          </span>
          <span className="cell">
            <button onClick={() => showToastButton("b-r")}>b-r</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
