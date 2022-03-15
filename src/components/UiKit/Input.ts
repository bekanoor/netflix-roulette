import styled from 'styled-components'

type widthTypes = 'large' | 'medium' | 'small';

interface Props {
  width?: widthTypes;
}

const widthOption = {
  large: '1024px',
  medium: '714px',
  small: '514px'  
}

const Input = styled.input<Props>`
  font-family: 'Montserrat', sans-serif;
  width: ${({width = 'medium'}) => widthOption[width]};
  height: 56px;
  font-size: 20px;
  padding: 0px 10px;
  outline:none; 
  color: white;
  border: none;
  border-bottom: solid;
  border-color: red;
  background-color: #232323;
`;

Input.defaultProps = {
  width: 'medium',
}


export default Input;