import React from 'react'

function Header({total}) {
  return (
    <header>
        <h1>Tracker</h1>
        <div className='total-income'>₱{total}</div>
    </header>
  )
}

export default Header