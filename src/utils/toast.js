import EventBus from "./eventBus";

const toast = () => {
  const alert = (message, option) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "toast-alert",
      ...option,
    });
  };

  const error = (message, option) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "toast-error",
      ...option,
    });
  };

  const warning = (message, option) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "toast-warning",
      ...option,
    });
  };

  const success = (message, option) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "toast-success",
      ...option,
    });
  };

  const info = (message, option) => {
    EventBus.publish("SHOW_TOAST", {
      message,
      id: crypto.randomUUID(),
      type: "toast-info",
      ...option,
    });
  };

  const confirm = (message) => {
    return new Promise((resolve) => {
      EventBus.publish("SHOW_CONFIRM_TOAST", { message, resolve });
    });
  };

  return { alert, error, warning, success, info, confirm };
};

export default toast();
