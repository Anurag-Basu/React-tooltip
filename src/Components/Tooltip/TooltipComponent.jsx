import React,{useState} from 'react'
import './TooltipComponent.css'

function TooltipComponent(props) {

  // create a state to cheack user is hovering on the .directions-content class or not
    const [active, setActive] = useState(false)
    
  return (
    <div>
        <div className='directions-content' onMouseEnter={() => setActive(true)} onMouseLeave= {() => setActive(false)} >
            {props.children}
            {
              // using short circuit operator to show the tooltip
            active &&
            // only visible when user is hovering over the container(active is true)
             <span className={`Tooltip-tip ${props.direction}`}  >
                 {props.text} 
            </span>
             }
            </div>
    </div>
  )
}

export default TooltipComponent