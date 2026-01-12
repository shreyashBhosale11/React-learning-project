import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profil() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please log in </div>
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profil