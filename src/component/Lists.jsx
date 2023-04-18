import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'


const Lists = ({ task ,onDelete}) => {
    
    return (
        <div id="tasks">
            <input type='checkbox' id='chk'/>
            <h5>{task.tittle}</h5>
            <p>{task.time}</p>
            <FontAwesomeIcon icon={faTrashCan } className='del' onClick={()=>onDelete(task.id)} />

        </div>
    )
}

export default Lists