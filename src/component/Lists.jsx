import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'


const Lists = ({ task ,onDelete,handlecheck}) => {
    
    return (
        <div id="tasks" style={task.check?{textDecorationLine:'line-through' }:null}>
            <input type='checkbox' id='chk' checked={task.check} onChange={()=>{handlecheck(task.id)}}  />
            <h5 > {task.tittle}</h5>
            <p >{task.time}</p>
            
            <FontAwesomeIcon icon={faTrashCan } className='del' onClick={()=>onDelete(task.id)} />
             
        </div>
    )
}

export default Lists