import EventBus from "./eventBus";

export const showToast = (message) => {
  EventBus.publish("SHOW_TOAST", { message });
};
