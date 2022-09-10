import React from 'react'

function LoanStatus() {
  return (
   <>
    <input type="text" id="enterLoanId" />
    <button id="trackButton"  onClick={()=>{
    window.location.href = "/loantrack"
  }}>Track Loan</button>
   </>
  )
}

export default LoanStatus