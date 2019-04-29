import React, { useEffect } from 'react'
import Tab from './tab'
import { useActions, useSelector } from 'react-redux'
import { TAB_FILTERS } from '../../actions'
import { setTabFilter } from '../../actions/tab'
import { fetchTopContent, fetchSearchContent, shouldSearch } from '../../actions/app'

export default function Tabs ({ location }) {
  const currentTab = useSelector(state => state.tabFilter.filter)
  const searchQuery = useSelector(state => state.app.query)
  const isSearching = useSelector(state => state.app.isSearching)
  const tabFilter = useActions(filter => setTabFilter(filter), [])
  const fetchContent = useActions(type => fetchTopContent(type), [])
  const fetchSearch = useActions(type => fetchSearchContent(type), [])
  const shouldStartSearch = useActions(query => shouldSearch(query), [])
  
  useEffect(() => {
    if (currentTab === TAB_FILTERS.SHOW_TOP_TV) {
      if (isSearching === false) fetchContent('tv')
    } else {
      if (isSearching === false) fetchContent('movie')
    }
  }, [currentTab, isSearching, location])

  useEffect(() => {
    shouldStartSearch(searchQuery)
  }, [searchQuery])

  useEffect(() => {
    if (currentTab === TAB_FILTERS.SHOW_TOP_TV) {
      fetchSearch('tv')
    } else {
      fetchSearch('movie')
    }
  }, [currentTab, searchQuery])
  
  return (
    <div>
      <Tab
        active={currentTab === TAB_FILTERS.SHOW_TOP_MOVIES ? true : false}
        action={() => tabFilter(TAB_FILTERS.SHOW_TOP_MOVIES)}
        name={'Movies'}
      />
      <Tab
        active={currentTab === TAB_FILTERS.SHOW_TOP_TV ? true : false}
        action={() => tabFilter(TAB_FILTERS.SHOW_TOP_TV)}
        name={'TV Shows'}
      />
    </div>
  )
}