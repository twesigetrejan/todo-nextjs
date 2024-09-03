import React from 'react'
import { Itask } from '@/types/tasks';
interface TaskProps {
    task: Itask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id}>

            <td>{task.text}</td>

            <td>Blue</td>
        </tr>
    )
}
export default Task
