import { useState } from 'react'
import './App.css'
import UserContext from './context/UserContext'
import UserContexProvider from './context/UserContexProvider'
import Login from './components/Login'
import Profil from './components/Profil'



function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContexProvider>
     <h1>Shreyash bhosale</h1>
     <Login />
     <Profil />
  

    </UserContexProvider>
  )
}

export default App
