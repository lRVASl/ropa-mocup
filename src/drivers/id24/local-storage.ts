export const LocalStorage = {
  set: <T>(key: string, value: T) => {
    // localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string): T | null => {
    // const rawItem = localStorage.getItem(key);
    const rawItem = sessionStorage.getItem(key);
    return rawItem ? JSON.parse(rawItem) : null;
  }
};
