import React from 'react'
import { useSelector, useActions } from 'react-redux'
import { handleSearchQuery } from '../../actions/app'
import * as S from './styles'

export default function Search () {
  const query = useSelector(state => state.app.query)
  const handleSearch = useActions(value => handleSearchQuery(value), [])

  function handleChange (event) {
    handleSearch(event.target.value)
  }

  return (
    <S.Input 
      type='search'
      onChange={handleChange}
      value={query}
      placeholder='Start searching...'
    />
  )
}