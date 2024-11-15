export type ToastPosition = "t-l" | "t-c" | "t-r" | "c-l" | "c-c" | "c-r" | "b-l" | "b-c" | "b-r";

export type ToastType = "normal" | "error" | "warning" | "success" | "info";

/** toast, confirm 공통 옵션 */
type CommonOption = Partial<{
  color: string;
  textColor: string;
  customImage: string;
}>;

/** toast, confirm 공통 이벤트 */
type CommonEvent = {
  id: number;
  message: string;
};

/** toast 옵션 */
export type ToastOption = CommonOption &
  Partial<{
    barColor: string;
    autoClose: boolean;
    closeOnClick: boolean;
    autoCloseTime: number;
    progressBar: boolean;
    position: ToastPosition;
    pauseOnHover: boolean;
    width: number;
    height: number;
    display: string;
  }>;

/** toast 이벤트 */
export type ToastEvent = ToastOption &
  CommonEvent & {
    type: ToastType;
  };

/** confirm 옵션 */
export type ConfirmOption = CommonOption &
  Partial<{
    confirmBtn: string;
    confirmBtnColor: string;
    cancleBtn: string;
    cancleBtnColor: string;
  }>;

/** confirm 이벤트 */
export type ConfirmEvent = ConfirmOption &
  CommonEvent & {
    confirm: boolean;
    resolve: (value: boolean | PromiseLike<boolean>) => void;
  };

export type Event = ToastEvent | ConfirmEvent;

export type PositionedToast = Record<ToastPosition, ToastEvent[]>;
