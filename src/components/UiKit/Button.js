import styled from 'styled-components';

const theme = {
    blank: {
        default: 'rgba(96, 96, 96, 0.68)',
        hover: ' rgba(96, 96, 96, 1);'
    }, 
    danger: {
        default: '#F65261',
        hover: '#b71c1c'
    },
    warning: {
        default: '#ffeb3b',
        hover: '#fbc02d'
    }, 
    white: {
        default: '#ffffff',
        hover: '#e3f2fd'
    }

}

const size = {
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
    }
}

const color = {
    white: 'white',
    red: '#F65261'
}

const Button = styled.button`
    font-family: Montserrat;
    font-weight: 500;
    background-color: ${props => theme[props.theme].default};
    width: ${props => size[props.size].width};
    height: ${props => size[props.size].height};
    color: ${props => color[props.color]};
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    transition: ease background-color 250ms;

    &:hover{
        background-color: ${props => theme[props.theme].hover};
    }
`

Button.defaultProps = {
    theme: 'blank',
    size: 'standard',
    color: 'white'
}

export default  Button;