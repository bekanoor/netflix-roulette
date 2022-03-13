import styled from 'styled-components'

interface Props {
  theme: keyof Theme
  size: keyof Size
  color: keyof Color
}

interface Theme {
  blank: themeType
  danger: themeType
  warning: themeType
  white: themeType
}

type themeType = {
  default: string
  hover: string
}

const themeOption = {
  blank: {
    default: 'rgba(96, 96, 96, 0.68)',
    hover: ' rgba(96, 96, 96, 1);',
  },
  danger: {
    default: '#F65261',
    hover: '#b71c1c',
  },
  warning: {
    default: '#ffeb3b',
    hover: '#fbc02d',
  },
  white: {
    default: '#ffffff',
    hover: '#e3f2fd',
  },
}

interface Size {
  standard: sizeType
  small: sizeType
  medium: sizeType
}

type sizeType = {
  width: string
  height: string
}

const sizeOption = {
  standard: {
    width: '234px',
    height: '56px',
  },
  small: {
    width: '80px',
    height: '26px',
  },
  medium: {
    width: '118px',
    height: '36px',
  },
}

interface Color {
  white: string
  red: string
}

const colorOption = {
  white: 'white',
  red: '#F65261',
}

const Button = styled.button<Props>`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  background-color: ${(props: Props) => themeOption[props.theme].default};
  width: ${(props) => sizeOption[props.size].width};
  height: ${(props) => sizeOption[props.size].height};
  color: ${(props) => colorOption[props.color]};
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  transition: ease background-color 250ms;

  &:hover {
    background-color: ${(props: Props) => themeOption[props.theme].hover};
  }
`

Button.defaultProps = {
  theme: 'blank',
  size: 'standard',
  color: 'white',
}

export default Button
