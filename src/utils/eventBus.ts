import { Listener, Topics } from "../types/EventType";
import { ToastOption } from "../types/ToastType";

const EventBus = () => {
  const topics: Topics = new Map();

  const subscribe = (topic: string, listener: Listener<ToastOption>) => {
    if (!topics.has(topic)) {
      topics.set(topic, []);
    }
    topics.get(topic)?.push(listener);
  };

  const unsubscribe = (topic: string) => {
    if (!topics.has(topic)) return;
    topics.delete(topic);
  };

  const publish = (topic: string, data: ToastOption) => {
    if (!topics.has(topic)) return;
    topics.get(topic)?.forEach((listener) => listener(data));
  };

  return { subscribe, unsubscribe, publish };
};

export default EventBus();
