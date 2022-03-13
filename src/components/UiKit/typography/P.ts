import styled from 'styled-components'

interface Props {
  theme: keyof theme
  opacity: number
  register: keyof Register
  font: keyof Font
  weight: keyof Weight
}

interface theme {
  red: themeType
  white: themeType
  black: themeType
}

type themeType = {
  color: string
}

const themeOption = {
  red: {
    color: '#F65261',
  },
  white: {
    color: '#FFFFFF',
  },
  black: {
    color: '#232323',
  },
}

interface Register {
  up: string
  down: string
}

const registerOption = {
  up: 'uppercase',
  down: 'lowercase',
}

interface Font {
  large: string
  medium: string
  regular: string
  small: string
  micro: string
}

const fontOption = {
  large: '40px',
  medium: '24px',
  regular: '20px',
  small: '18px',
  micro: '14px',
}

interface Weight {
  regular: number
  thin: number
}

const weightOption = {
  regular: 500,
  thin: 300,
}

const P = styled.p<Props>`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  line-height: 24px;
  color: ${(props: Props) => themeOption[props.theme].color};
  font-weight: ${(props) => weightOption[props.weight]};
  font-size: ${(props) => fontOption[props.font]};
  opacity: ${(props) => props.opacity};
  text-transform: ${(props: Props) => registerOption[props.register]};
`

P.defaultProps = {
  opacity: 1,
  theme: 'black',
  register: 'down',
  font: 'regular',
  weight: 'regular',
}

export default P
