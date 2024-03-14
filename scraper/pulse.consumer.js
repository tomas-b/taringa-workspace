// connect to queue
// import queue_client from 'rabbitmq'

export const Q = (name) => ({
  subscribe: (callback) => {
    // queue_client.connect();
    // queue_client.subscribe(name, callback);
    console.log("subscribing to", name);
  },
  emit: (data) => {
    console.log("emitting", data);
  },
});
