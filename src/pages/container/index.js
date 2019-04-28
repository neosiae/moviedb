import React from 'react'
import * as S from './styles'
import { withRouter } from 'react-router-dom'

function Container ({ history, children }) {
  return <S.Container>{React.Children.map(children, child => {
    return React.cloneElement(child, [history])
  })}</S.Container>
}

const ContainerWithRouter = withRouter(Container)

export default ContainerWithRouter