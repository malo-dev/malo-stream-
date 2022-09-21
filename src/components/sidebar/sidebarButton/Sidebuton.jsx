import React from 'react'
import './sidebutton.css'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons '
import { useLocation } from 'react-router-dom'
const Sidebuton = (props) => {
  //  here i get the url like a state in usestate
  const Location = useLocation()

  // here i make condition with the true path which i usually get from network
  const isActive = Location.pathname === props.to ? true : false
  
  const btnClass = isActive ? "btn-body active" : "btn-body"
   
  return (
    
      <Link to={props.to} className={btnClass}>
      <div className={btnClass}>
        <IconContext.Provider value={{size : "24px", className : "btn-icon"}}>
          {props.icon}
          <p className='btn-title'>{props.title}</p> 
        </IconContext.Provider>
        </div>
       </Link>
    
  )
}

export default Sidebuton