export function storeInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}