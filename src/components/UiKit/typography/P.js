import styled from 'styled-components'

const theme = {
  red: {
    color: '#F65261'
  },
  white: {
    color: '#FFFFFF'
  },
  black: {
    color: '#232323'
  }
}

const register = {
  up: 'uppercase',
  down: 'lowercase'
}

const font = {
  large: '40px',
  medium: '24px',
  regular: '20px',
  small: '18px',
  micro: '14px' 
}

const weight = {
  regular: 500,
  thin: 300
}

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  line-height: 24px;
  font-weight: ${props => weight[props.weight]};
  font-size: ${props => font[props.font]};
  color: ${props => theme[props.theme].color};
  opacity: ${props => props.opacity};
  text-transform: ${props => register[props.register]};
`;

P.defaultProps = {
  opacity: 1,
  theme: 'black',
  register: 'down',
  font: 'regular',
  weight: 'regular'
}

export default P;
