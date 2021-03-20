export const getLocalStorage = (key = '') => {
  const result = localStorage.getItem(key)
  return JSON.parse(result)
}

export const setLocalStorage = (key, value = '') => {
  const encodedValue = JSON.stringify(value)
  localStorage.setItem(key, encodedValue)
  return encodedValue
}

export const removeLocalStorage = (key = '') => {
  return localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}
