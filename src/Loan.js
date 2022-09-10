import React from 'react'

function Loan() {
  return (
    <>
    <input type="text" id="enterName" />
    <button id="loanStatus"  onClick={()=>{
    window.location.href = "/loanstatus"
  }}>Loan Status</button>
    </>
  )
}

export default Loan