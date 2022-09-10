import React from 'react'

function Home() {
  return (
  <>
  <button id="homeButton">Home Page</button>
  <button id="profile"  onClick={()=>{
    window.location.href = "/profile"
  }}>Profile</button>
  <button id="applyLoan" onClick={()=>{
    window.location.href = "/loan"
  }}>Apply Loan</button>
  </>
  )
}

export default Home