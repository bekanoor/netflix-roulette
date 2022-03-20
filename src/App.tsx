import { useEffect, useState } from 'react'
import {Header, Main} from './containers'
import Data from './Data/data'

export default function App() {
  const [data, setData] = useState<Array<object>>([{}]);

  useEffect(() => {
    setTimeout(() => {
      const requestData:object[] = Data;
      setData(requestData);
    }, 42)
  }, [data]);

  return (
    <div className='wrapper'>
      <Header></Header>
      <Main movies={data}></Main>
    </div>
  )
}
