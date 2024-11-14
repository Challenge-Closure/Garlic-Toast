import { SHOW_CONFIRM_TOAST, SHOW_TOAST } from "../constants/topic";
import { type ConfirmOption, type ToastOption } from "../types/toastType";
import EventBus from "./eventBus";

const defaultOption = {
  autoClose: true,
  progressBar: true,
  pauseOnHover: true,
  closeOnClick: true,
  customImage: undefined,
  autoCloaseTime: 3000,
};

const toast = () => {
  const alert = (message: string, option: ToastOption = defaultOption) => {
    EventBus.publish(SHOW_TOAST, {
      ...option,
      message,
      id: Date.now(),
      type: "normal",
    });
  };

  const error = (message: string, option: ToastOption = defaultOption) => {
    EventBus.publish(SHOW_TOAST, {
      ...option,
      message,
      id: Date.now(),
      type: "error",
    });
  };

  const warning = (message: string, option: ToastOption = defaultOption) => {
    EventBus.publish(SHOW_TOAST, {
      ...option,
      message,
      id: Date.now(),
      type: "warning",
    });
  };

  const success = (message: string, option: ToastOption = defaultOption) => {
    EventBus.publish(SHOW_TOAST, {
      ...option,
      message,
      id: Date.now(),
      type: "success",
    });
  };

  const info = (message: string, option: ToastOption = defaultOption) => {
    EventBus.publish(SHOW_TOAST, {
      ...option,
      message,
      id: Date.now(),
      type: "info",
    });
  };

  const confirm = (message: string, option: ConfirmOption): Promise<boolean> => {
    return new Promise((resolve) => {
      EventBus.publish(SHOW_CONFIRM_TOAST, { ...option, message, id: Date.now(), confirm: true, resolve });
    });
  };

  return { alert, error, warning, success, info, confirm };
};

export default toast();
