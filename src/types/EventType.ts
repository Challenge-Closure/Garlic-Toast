import { ToastOptionType } from "./ToastType";

export type Listener<T> = (data: T) => void;
export type Topics = Map<string, Listener<ToastOptionType>[]>;
