export type ToastPosition = "t-l" | "t-c" | "t-r" | "c-l" | "c-c" | "c-r" | "b-l" | "b-c" | "b-r";

export type ToastType = "normal" | "error" | "warning" | "success" | "info" | "alert" | "confirm";

export interface ToastOptionType {
  type: ToastType | string;
  autoClose: boolean;
  progressBar: boolean;
  pauseOnHover: boolean;
  closeOnClick: boolean;
  customImage: undefined | string;
  position?: ToastPosition;
  autoCloseTime?: number;
  id?: string | number;
  message?: string;
  resolve?: Function;
}

export interface AlertToastType {
  toast: ToastOptionType;
  containerAutoCloseTime: number;
  setAlertToasts: Function;
  position: string;
}
