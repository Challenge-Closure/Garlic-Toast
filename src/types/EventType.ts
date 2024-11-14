import { ToastOption } from "./ToastType";

export type Listener<T> = (data: T) => void;
export type Topics = Map<string, Listener<ToastOption>[]>;
