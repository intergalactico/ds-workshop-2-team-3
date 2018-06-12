import styled, { css } from 'styled-components'

export const SimpleButton = styled.button`
  width: 110px;
  height: 45px;
  background-color: ${props => props.inverted ? 'transparent' : '#fff'};
  border-radius: 3px;
  color: ${props => props.inverted ? '#fff': '#070723'};
  border: ${props => props.inverted ? 'solid 2px #fff' : 'solid 2px #070723'};
  &:hover {
    background-color: ${props => props.inverted ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.1)'};
  }
`

export const Text = styled.span`
  font-family: Lato;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  max-height: max-content;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: inherit; 
`
