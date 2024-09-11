import Toast from "./components/Toast";
import { showToast } from "./utils/showToast";

const App = () => {
  return (
    <div className="App">
      <h1>React Event Bus Toast Example</h1>
      <button onClick={() => showToast("This is a toast message!")}>
        Show Toast
      </button>
      <Toast />
    </div>
  );
};

export default App;
