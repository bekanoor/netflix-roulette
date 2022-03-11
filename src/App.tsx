import styled from 'styled-components';
import Button from './components/UiKit/Button';

export default function App() {
  return (
      <div className='wrapper'>
        <Button theme='danger' color='white' >title</Button>
        <Button theme='danger' size='medium'>genre</Button>
      </div>
  );
}
