import {
  LOADING_TOP_CONTENT,
  RECEIVE_TOP_CONTENT,
  LOADING_SEARCH_CONTENT,
  RECEIVE_SEARCH_CONTENT,
  HANDLE_SEARCH_QUERY,
  SEARCH_WILL_START,
  LOADING_INFO,
  RECEIVE_INFO
} from './'
import { to, debounce } from '../helpers'
import { topRatedContent, search, info } from '../helpers/api'

export function loadTopContent (isLoading) {
  return {
    type: LOADING_TOP_CONTENT,
    isLoading
  }
}

export function receiveTopContent (isLoading, json) {
  return {
    type: RECEIVE_TOP_CONTENT,
    isLoading,
    json
  }
}

export function fetchTopContent (type) {
  return async function (dispatch) {
    dispatch(loadTopContent(true))

    const [err, data] = await to(fetch(topRatedContent(type)))

    if (err) console.error(err)

    const json = await data.json()

    dispatch(receiveTopContent(false, json))
  }
}

export function handleSearchQuery (query) {
  return {
    type: HANDLE_SEARCH_QUERY,
    query
  }
}

function startSearch (isSearching) {
  return {
    type: SEARCH_WILL_START,
    isSearching
  }
}

export function shouldSearch (query) {
  return function (dispatch) {
    if (query.length >= 3) {
      dispatch(startSearch(true))
    } else {
      dispatch(startSearch(false))
    }
  }
}

export function loadSearchContent (isLoading) {
  return {
    type: LOADING_SEARCH_CONTENT,
    isLoading
  }
}

export function receiveSearchContent (isLoading, json) {
  return {
    type: RECEIVE_SEARCH_CONTENT,
    isLoading,
    json
  }
}

const innerFn = debounce(async (dispatch, getState, ...args) => {
  const query = getState().app.query

  const [ type ] = args

  dispatch(loadSearchContent(true))

  const [err, data] = await to(fetch(search(type, query)))

  if (err) console.error(err)

  const json = await data.json()

  dispatch(receiveSearchContent(false, json))
}, 1000)

export const fetchSearchContent = (...args) => (dispatch, getState) =>
  innerFn(dispatch, getState, ...args)

export function loadInfo (isLoading) {
  return {
    type: LOADING_INFO,
    isLoading
  }
}
  
export function receiveInfo (isLoading, json) {
  return {
    type: RECEIVE_INFO,
    isLoading,
    json
   }
}

export function fetchInfo (type, id) {
  return async function (dispatch) {
    dispatch(loadInfo(true))

    const [err, data] = await to(fetch(info(type, id)))

    if (err) console.error(err)

    const json = await data.json()

    dispatch(receiveInfo(false, json))
  }
}
