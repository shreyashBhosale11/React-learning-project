import { useState } from 'react'
import AddTodo from '../src/components/AddTodo'
import Todos from '../src/components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-center  '>
     <h1 className=''>Learn about Redux toolkit</h1>
     <AddTodo/>
     <Todos/>
     </div>
    </>
  )
}

export default App
