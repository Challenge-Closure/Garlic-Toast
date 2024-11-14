import type { Event } from "./toastType";

export type Topic = "SHOW_TOAST" | "SHOW_CONFIRM_TOAST";

export type Listener<T> = (event: T) => void;

export type TopicMap = Map<Topic, Listener<Event>[]>;
