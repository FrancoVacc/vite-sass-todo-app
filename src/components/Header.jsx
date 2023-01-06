import React from 'react'
import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'

const Header = ({changeTheme, theme}) => {
  return (
    <header className="container">
        <div>
            <h2>Todo</h2>
            <button onClick={changeTheme}>
              {
                theme === 'light' ? <MoonIcon/> : <SunIcon/>
              }
                
            </button>
        </div> 
  </header>
  )
}

export default Header