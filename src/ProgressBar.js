import styled from 'styled-components'

export default styled.div`
  transition: width 0.3s ease;
  background: white;
  border-radius: 5px;
  margin: 0 30px;
  border: 1px solid black;
  position: relative;
  height: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: block;
    background: #84bdbd;
    width: ${props => props.percentage}%;
    text-align: center;
    border-radius: 5px;
  }
`
