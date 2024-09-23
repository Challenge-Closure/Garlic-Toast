import { Toast } from '../types/Type';
import EventBus from './eventBus';

const toast = () => {
  const alert = (message:string, option:Toast) => {
    EventBus.publish('SHOW_TOAST', {
      ...option,
      message,
      id: Date.now(),
      type: 'normal'
    });
  };

  const error = (message:string, option:Toast) => {
    EventBus.publish('SHOW_TOAST', {
      ...option,
      message,
      id: Date.now(),
      type: 'error'
    });
  };

  const warning = (message:string, option:Toast) => {
    EventBus.publish('SHOW_TOAST', {  
      ...option,
      message,
      id: Date.now(),
      type: 'warning',
    });
  };

  const success = (message:string, option:Toast) => {
    EventBus.publish('SHOW_TOAST', {
      ...option,
      message,
      id: Date.now(),
      type: 'success',
    });
  };

  const info = (message:string, option:Toast) => {
    EventBus.publish('SHOW_TOAST', {
      ...option,
      message,
      id: Date.now(),
      type: 'info',
    });
  };

  const confirm = (message:string, option:Toast) => {
    return new Promise((resolve) => {
      EventBus.publish('SHOW_CONFIRM_TOAST', { message, ...option, resolve });
    });
  };

  return { alert, error, warning, success, info, confirm };
};

export default toast();
