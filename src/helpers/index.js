export function debounce (fn, time) {
  let timeoutId = undefined

  return function () {
    const fnCall = () => fn.apply(this, arguments)
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fnCall, time)
  }
}

export function to (promise) {
  return promise
    .then(data => [null, data])
    .catch(error => [error])
}

export function getPage (filter, filters) {
  if (filter === filters.SHOW_TOP_TV) return 'tv'
  return 'movie'
}