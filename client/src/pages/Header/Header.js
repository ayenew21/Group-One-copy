import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
<img className='header__img'
src={`https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png`} alt="Logo" />
<div className='header__nav'>
    <h3>Home</h3>
    <h3>How it works</h3>
    <h3 className='header__signin'>Sign IN</h3>
</div>
    </div>
  )
}

export default Header;