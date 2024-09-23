const EventBus = () => {
  const topics = new Map();

  const subscribe = (topic: string, listener: Function) => {
    if (!topics.has(topic)) {
      topics.set(topic, []);
    }
    topics.get(topic).push(listener);
  };

  const unsubscribe = () => {
    if (!topics.size) return;
    topics.clear();
  };

  const publish = (topic: string, data: any) => {
    if (!topics.has(topic)) return;
    topics.get(topic).forEach((listener: any) => listener(data));
  };

  return { subscribe, unsubscribe, publish };
};

export default EventBus();

// interface ArlertData {
//   message: string;
//   id: string;
//   type: string;
// ...option
// }
