import { ToastOptionType } from "../types/ToastType";
import EventBus from "./eventBus";

const initialState = {
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
  customImage: undefined,
  autoCloaseTime: 3000
};

const toast = () => {
  const alert = (message: string, option: ToastOptionType = initialState) => {
    EventBus.publish("SHOW_TOAST", {
      ...option,
      message,
      id: Date.now(),
      type: "normal"
    });
  };

  const error = (message: string, option: ToastOptionType = initialState) => {
    EventBus.publish("SHOW_TOAST", {
      ...option,
      message,
      id: Date.now(),
      type: "error"
    });
  };

  const warning = (message: string, option: ToastOptionType = initialState) => {
    EventBus.publish("SHOW_TOAST", {
      ...option,
      message,
      id: Date.now(),
      type: "warning"
    });
  };

  const success = (message: string, option: ToastOptionType = initialState) => {
    EventBus.publish("SHOW_TOAST", {
      ...option,
      message,
      id: Date.now(),
      type: "success"
    });
  };

  const info = (message: string, option: ToastOptionType = initialState) => {
    EventBus.publish("SHOW_TOAST", {
      ...option,
      message,
      id: Date.now(),
      type: "info"
    });
  };

  const confirm = (message: string, option: ToastOptionType = initialState): Promise<boolean> => {
    return new Promise((resolve) => {
      EventBus.publish("SHOW_CONFIRM_TOAST", { message, ...option, resolve });
    });
  };

  return { alert, error, warning, success, info, confirm };
};

export default toast();
