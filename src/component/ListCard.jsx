import React from 'react'
import Lists  from './Lists'
import { v4 } from 'uuid'
const ListCard = ({task,onDelete,handlecheck}) => {
    const rendering=task.map((task)=>(<Lists key={v4()} task={task}   onDelete={onDelete} handlecheck={handlecheck} />))
  return (
    <div>
        {rendering.length>0?rendering:<p style={{padding:'1rem',color:'',fontFamily:'fantasy'}}>Item not found</p>}
  
    </div>
  )
}

export default ListCard