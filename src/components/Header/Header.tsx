import React from 'react';
import Button from '../UiKit/Button'
import Input from '../UiKit/Input'

const Header:React.FC = () => {
  return (
    <>
      <Button theme='warning' size='standard' color='red'>button</Button>
      <Input width='large'></Input>
    </>
  )
}

Button.defaultProps = {
  theme: 'blank',
  size: 'standard',
  color: 'white',
}

export default Header;