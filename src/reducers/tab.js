import {
  TAB_FILTERS,
  SET_TAB_FILTER
} from '../actions'

const initialState = {
  filter: TAB_FILTERS.SHOW_TOP_TV
}

export default function tabFilter (state = initialState, action) {
  switch (action.type) {
    case SET_TAB_FILTER:
      return { ...state, filter: action.filter }
    default:
      return state
  }
}