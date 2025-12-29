import { useState } from 'react'
import News from './components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='news-blogs-app'>
          <News/>
      </div>
    </div>
  )
}

export default App
