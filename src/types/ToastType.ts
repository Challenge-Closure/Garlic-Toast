interface ToastOptionType {
  id?: string | number;
  resolve?: Function;
  message?: string;
  type?: ToastType | string;
  autoClose?: boolean;
  closeOnClick?: boolean;
  autoCloseTime?: number;
  progressBar?: boolean;
  position?: ToastPosition;
  pauseOnHover?: boolean;
  customImage?: undefined | string;
}

export default ToastOptionType;

export type ToastPosition = "t-l" | "t-c" | "t-r" | "c-l" | "c-c" | "c-r" | "b-l" | "b-c" | "b-r";

export type ToastType = "normal" | "error" | "warning" | "success" | "info" | "alert" | "confirm";
