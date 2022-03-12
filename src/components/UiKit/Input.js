import styled from 'styled-components';

const width = {
  large: '1024px',
  medium: '714px',
  small: '514px'  
}


const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  width: ${props => width[props.width]};
  height: 56px;
  font-size: 20px;
  padding: 0px 10px;
  outline:none;
  border: none;
  border-bottom: solid;
  border-color: red;
`;

Input.defaultProps = {
  width: 'medium',
}


export default Input;