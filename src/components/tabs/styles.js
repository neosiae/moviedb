import styled, { css } from 'styled-components'

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: #ecf0f1;
  cursor: pointer;
  ${props => props.active && css`
    border-bottom: 2px solid #2980b9;
  `}
`