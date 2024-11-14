export type ToastPosition = "t-l" | "t-c" | "t-r" | "c-l" | "c-c" | "c-r" | "b-l" | "b-c" | "b-r";

export type ToastType = "normal" | "error" | "warning" | "success" | "info" | "alert" | "confirm";

type CommonOption = Partial<{
  textColor: string;
  color: string;
  customImage: string;
}>;

type CommonEvent = {
  id: number;
  message: string;
};

export type ToastOption = CommonOption &
  Partial<{
    barColor: string;
    autoClose: boolean;
    closeOnClick: boolean;
    autoCloseTime: number;
    progressBar: boolean;
    position: ToastPosition;
    pauseOnHover: boolean;
  }>;

export type ToastEvent = ToastOption &
  CommonEvent & {
    type: ToastType;
  };

export type ConfirmOption = CommonOption &
  Partial<{
    confirmBtn: string;
    confirmBtnColor: string;
    cancleBtn: string;
    cancleBtnColor: string;
  }>;

export type ConfirmEvent = ConfirmOption &
  CommonEvent & {
    confirm: boolean;
    resolve: (value: boolean | PromiseLike<boolean>) => void;
  };

export type Event = ToastEvent | ConfirmEvent;

export type PositionedToast = Record<ToastPosition, ToastEvent[]>;
