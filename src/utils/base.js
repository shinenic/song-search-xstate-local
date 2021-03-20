export const clearBlanks = (str) => {
  return str.replace(/[\r\n\s]/g, '')
}

export const isZhuyin = (str) => {
  const zhuyin = /[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/
  return zhuyin.test(str)
}

export const showConnectToYoutube = (title, keyword) => {
  const check = window.confirm(`連結至Youtube搜尋 "${title}" `)
  if (check) {
    window
      .open(`https://www.youtube.com/results?search_query=${keyword}`, '_blank')
      .focus()
  }
}

export const encodeQueryData = (data = {}) =>
  Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&')

export const isDevMode = process.env.NODE_ENV === 'development'
