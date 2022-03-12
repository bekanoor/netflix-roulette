import styled from 'styled-components';
import Button from './components/UiKit/Button';
import H1 from './components/UiKit/typography/H1';
import P from './components/UiKit/typography/P';
import Input from './components/UiKit/Input';

export default function App() {
  return (
      <div className='wrapper'>
        <Button theme='danger' color='white' >title</Button>
        <Button theme='danger' size='medium'>genre</Button>
        <H1>qwssssssssssssssdq</H1>
        <P theme='red' register='up' font='large' weight='thin'>wssss</P>
        <Input placeholder='What do you want to watch?'></Input>
      </div>
  );
}
