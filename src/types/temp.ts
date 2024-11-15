import { ToastOptionType } from "./tempT";

export type Listener<T> = (data: T) => void;
export type Topics = Map<string, Listener<ToastOptionType>[]>;
