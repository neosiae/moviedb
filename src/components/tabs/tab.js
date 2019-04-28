import React from 'react'
import * as S from './styles'

export default function Tab ({ name, active, action }) {
  return (
    <S.Button
      active={active}
      onClick={action}
    >
      {name}
    </S.Button>
  )
}