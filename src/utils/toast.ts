import EventBus from "./eventBus";

const toast = () => {
  const alert = (message: string, option: object) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "normal",
      ...option
    });
  };

  const error = (message: string, option: object) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "error",
      ...option
    });
  };

  const warning = (message: string, option: object) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "warning",
      ...option
    });
  };

  const success = (message: string, option: object) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "success",
      ...option
    });
  };

  const info = (message: string, option: object) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "info",
      ...option
    });
  };

  const confirm = (message: string, option: object) => {
    return new Promise((resolve) => {
      EventBus.publish("SHOW_CONFIRM_TOAST", { message, ...option, resolve });
    });
  };

  return { alert, error, warning, success, info, confirm };
};

export default toast();

interface AlertOptionType {
  position: string;
  autoClose: boolean;
  progressBar: boolean;
  pauseOnHover: boolean;
  autoCloseTime: number;
  closeOnClick: boolean;
  customImage: string;
}
