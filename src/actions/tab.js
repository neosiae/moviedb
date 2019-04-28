import { SET_TAB_FILTER } from './'

export function setTabFilter (filter) {
  return {
    type: SET_TAB_FILTER,
    filter
  }
}