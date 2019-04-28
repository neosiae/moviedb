import React from 'react'
import Item from '../item'
import { TAB_FILTERS } from '../../actions'
import { useSelector } from 'react-redux'
import { getPage } from '../../helpers'
import * as S from './styles'

function Map ({ items }) {
  const currentTab = useSelector(state => state.tabFilter.filter)

  return (
    <S.Container>
      {Array.isArray(items) && items.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <S.LinkLeft key={item.id} to={`/${getPage(currentTab, TAB_FILTERS)}/${item.id}`}>
              <Item item={item} />
            </S.LinkLeft>
          )
        } else {
          return (
            <S.LinkRight key={item.id} to={`/${getPage(currentTab, TAB_FILTERS)}/${item.id}`}>
              <Item item={item} />
            </S.LinkRight>
          )
        }
      })}
    </S.Container>
  )
}

export default function List () {
  const { isLoading, items } = useSelector(state => state.app)

  return (
    <div>
      {
        isLoading 
          ? 'Loading...'
          : <Map items={items} />
      }
    </div>
  )
}