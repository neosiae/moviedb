import React from 'react'
import * as S from './styles'

export default function Video ({ id, name }) {
  return (
    <S.Wrapper>
      <S.Iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={name}
      />
    </S.Wrapper>
  )
}