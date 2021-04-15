import React from 'react'

const TaskIndexItem = (props) => {
    
        return(
            <li className="task-index-item">
                <p>{props.task.name}</p>
                <p>Asignee</p>
                <p>Due Date</p>
            </li>
        )
    
}

export default TaskIndexItem;