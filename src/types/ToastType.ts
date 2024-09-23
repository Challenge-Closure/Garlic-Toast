interface ToastOptionType {
  type: ToastType | string;
  autoClose: boolean;
  progressBar: boolean;
  pauseOnHover: boolean;
  closeOnClick: boolean;
  customImage: boolean | string;

  position?: ToastPosition;
  autoCloseTime?: number;
  id?: string | number;
  message?: string;
  resolve?: Function;
}

export default ToastOptionType;

export type ToastPosition = "t-l" | "t-c" | "t-r" | "c-l" | "c-c" | "c-r" | "b-l" | "b-c" | "b-r";

export type ToastType = "normal" | "error" | "warning" | "success" | "info" | "alert" | "confirm";
