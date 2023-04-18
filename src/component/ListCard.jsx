import React from 'react'
import Lists  from './Lists'
import { v4 } from 'uuid'
const ListCard = ({task,onDelete}) => {
    const rendering=task.map((task)=>(<Lists key={v4()} task={task}   onDelete={onDelete}/>))
  return (
    <div>
        {rendering}
  
    </div>
  )
}

export default ListCard