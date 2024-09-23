interface ToastTypeObj {
  position: ToastPosition;
  autoClose: boolean;
  autoCloseTime: number;
  closeOnClick: boolean;
  id: string;
  type: ToastTypeObj;
  pauseOnHover: boolean;
  customImage: undefined | string;
  message: string;
  progressBar: boolean;
  resolve: Function;
}

export default ToastTypeObj;

export type ToastPosition = "t-l" | "t-c" | "t-r" | "c-l" | "c-c" | "c-r" | "b-l" | "b-c" | "b-r";

export type ToastType = "normal" | "error" | "warning" | "success" | "info";
