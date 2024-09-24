export type ToastPosition = "t-l" | "t-c" | "t-r" | "c-l" | "c-c" | "c-r" | "b-l" | "b-c" | "b-r";

export type ToastType = "normal" | "error" | "warning" | "success" | "info" | "alert" | "confirm";

export interface ToastOptionType {
  id?: string | number;
  resolve?: Function;
  textColor?: string;
  color?: string;
  barColor?: string;
  message?: string;
  type?: ToastType | string;
  autoClose?: boolean;
  closeOnClick?: boolean;
  autoCloseTime?: number;
  progressBar?: boolean;
  position?: ToastPosition;
  pauseOnHover?: boolean;
  customImage?: undefined | string;
  confirmBtn?: string;
  confirmBtnColor?: string;
  cancleBtn?: string;
  cancleBtnColor?: string;
}

export interface AlertToastType {
  toast: ToastOptionType;
  containerAutoCloseTime: number;
  setAlertToasts: Function;
  position: string;
}
