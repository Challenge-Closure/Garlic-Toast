import { ToastOptionType } from "./toastType";

export type Listener<T> = (data: T) => void;
export type Topics = Map<string, Listener<ToastOptionType>[]>;
