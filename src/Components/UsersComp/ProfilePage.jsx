import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'  



import fireapp from '../../Firebase/FireApp.js'

const ProfilePage = () => {
    const navigate = useNavigate()

    const auth = getAuth(fireapp)


    const handleclick = async () => {
        try {
            console.log("hello")
            await signOut(auth);

            console.log("User signed out");
            navigate('/')
          } catch (error) {
            console.error("Error during sign out:", error.message);
          }
    }
  return (
    <div>ProfilePage
        <button onClick={()=>{handleclick()}} >Log Out..</button>
    </div>
  )
}

export default ProfilePage