import type { Listener, Topic, TopicMap } from "../types/eventBusType";
import type { Event } from "../types/toastType";

const EventBus = () => {
  const topics: TopicMap = new Map();

  const subscribe = (topic: Topic, listener: Listener<Event>) => {
    if (!topics.has(topic)) {
      topics.set(topic, []);
    }
    topics.get(topic)?.push(listener);
  };

  const unsubscribe = (topic: Topic) => {
    if (!topics.has(topic)) return;
    topics.delete(topic);
  };

  const publish = (topic: Topic, event: Event) => {
    if (!topics.has(topic)) return;
    topics.get(topic)?.forEach((listener) => listener(event));
  };

  return { subscribe, unsubscribe, publish };
};

export default EventBus();
