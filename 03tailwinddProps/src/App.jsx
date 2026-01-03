import { useState } from 'react'

import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 md-4'>TAilwind test</h1>
      <Card username="shreysh" btntext="click me"/>
      <Card username="Atharv"/>
    </>
  )
}

export default App
