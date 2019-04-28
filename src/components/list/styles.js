import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export const LinkLeft = styled(Link)`
  justify-self: left;
`

export const LinkRight = styled(Link)`
  justify-self: right;
`