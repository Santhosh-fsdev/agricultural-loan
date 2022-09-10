import React from 'react'

function Profile() {
  return (
    <>
    <p id="name">User Name</p>
    <button id="logout"  onClick={()=>{
    window.location.href = "/"
  }}>Logout</button>
    </>
  )
}

export default Profile