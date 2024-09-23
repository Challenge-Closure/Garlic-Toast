import { Toast } from "../types/Type";

const EventBus = () => {
  const topics = new Map();

  const subscribe = (topic:string, listener:any) => {
    if (!topics.has(topic)) {
      topics.set(topic, []);
    }
    topics.get(topic).push(listener);
  };

  const unsubscribe = () => {
    if (!topics.size) return;
    topics.clear();
  };

  const publish = (topic:string, data:Toast) => {
    if (!topics.has(topic)) return;
    topics.get(topic).forEach((listener:any) => listener(data));
  };

  return { subscribe, unsubscribe, publish };
};

export default EventBus();
