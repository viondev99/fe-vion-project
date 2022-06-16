/**
 * Get an data from storage.
 *
 * @param key The key to fetch.
 */
 export function loadFromStorage(key) {
    try {
      const dataParsed = localStorage.getItem(key);
      return JSON.parse(dataParsed);
    } catch {
      return null;
    }
  }
  
  /**
   * Saves data to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  export function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }
  
  /**
   * Removes something from storage.
   *
   * @param key The key to kill.
   */
  export function removeFromStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  }
  
  /**
   * Burn it all to the ground.
   */
  export function clear() {
    try {
      localStorage.clear();
    } catch {}
  }
  