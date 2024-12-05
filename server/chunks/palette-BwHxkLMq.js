import { w as writable } from './index-erdRxbsm.js';

function storable(key, initialValue) {
  const isBrowser = typeof window !== "undefined";
  const storedValue = isBrowser && localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue;
  const store = writable(storedValue);
  const { subscribe, set, update } = store;
  return {
    subscribe,
    set: (n) => {
      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(n));
      }
      set(n);
    },
    update: (cb) => {
      store.update((value) => {
        const updatedValue = cb(value);
        if (isBrowser) {
          localStorage.setItem(key, JSON.stringify(updatedValue));
        }
        return updatedValue;
      });
    }
  };
}
storable("palette", 0);

export { storable as s };
//# sourceMappingURL=palette-BwHxkLMq.js.map
