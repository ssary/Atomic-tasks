import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = ({title, toggle, addTaskShown}) => {
  const location = useLocation();
  console.log(location);
  return (
    
    <header className='header'>
      <h1>{title}</h1>
      
      {(location.pathname === '/') && <Button color={(addTaskShown)?'red':'green'} text={(addTaskShown)?'close':'add'} onclick={toggle}/>}
    </header>
  )
}

export default Header
