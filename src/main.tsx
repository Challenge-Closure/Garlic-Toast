import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import toast from "./utils/toast";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);



toast.confirm("출력메세지", {
  cancleBtn: "취소 버튼 문구"
});