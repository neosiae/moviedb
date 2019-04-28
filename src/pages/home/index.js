import React from 'react'
import Tabs from '../../components/tabs'
import Search from '../../components/search'
import List from '../../components/list'

export default function Home ({ history }) {
  return (
    <>
      <Tabs location={history.location} />
      <Search />
      <List />
    </>
  )
}