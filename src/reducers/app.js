import {
  LOADING_TOP_CONTENT,
  RECEIVE_TOP_CONTENT,
  LOADING_SEARCH_CONTENT,
  RECEIVE_SEARCH_CONTENT,
  HANDLE_SEARCH_QUERY,
  SEARCH_WILL_START,
  LOADING_INFO,
  RECEIVE_INFO
} from '../actions'

const initialState = {
  query: '',
  items: null,
  isLoading: true,
  isSearching: false
}

export default function app (state = initialState, action) {
  switch (action.type) {
    case LOADING_TOP_CONTENT:
      return { 
        ...state, 
        isLoading: action.isLoading 
      }
    case RECEIVE_TOP_CONTENT:
      return { 
        ...state, 
        isLoading: action.isLoading, 
        items: action.json.results.slice(0, 10)
      }
    case HANDLE_SEARCH_QUERY:
      return {
        ...state,
        query: action.query
      }
    case SEARCH_WILL_START:
      return {
        ...state,
        isSearching: action.isSearching
      }
    case LOADING_SEARCH_CONTENT:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case RECEIVE_SEARCH_CONTENT:
      return {
        ...state,
        isLoading: action.isLoading,
        items: action.json.results
      }
    case LOADING_INFO:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case RECEIVE_INFO:
      return {
        ...state,
        isLoading: action.isLoading,
        items: action.json
      }
    default:
      return state
  }
}