import EventBus from './eventBus';

const toast = () => {
  const alert = (message, option) => {
    EventBus.publish('SHOW_TOAST', {
      message,
      id: crypto.randomUUID(),
      type: 'normal',
      ...option
    });
  };

  const error = (message, option) => {
    EventBus.publish('SHOW_TOAST', {
      message,
      id: crypto.randomUUID(),
      type: 'error',
      ...option
    });
  };

  const warning = (message, option) => {
    EventBus.publish('SHOW_TOAST', {
      message,
      id: crypto.randomUUID(),
      type: 'warning',
      ...option
    });
  };

  const success = (message, option) => {
    EventBus.publish('SHOW_TOAST', {
      message,
      id: crypto.randomUUID(),
      type: 'success',
      ...option
    });
  };

  const info = (message, option) => {
    EventBus.publish('SHOW_TOAST', {
      message,
      id: crypto.randomUUID(),
      type: 'info',
      ...option
    });
  };

  const confirm = (message) => {
    return new Promise((resolve) => {
      EventBus.publish('SHOW_CONFIRM_TOAST', { message, resolve });
    });
  };

  return { alert, error, warning, success, info, confirm };
};

export default toast();
