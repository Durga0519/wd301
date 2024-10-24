import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate?: string;           // Optional prop
  completedAtDate?: string;  // Optional prop
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    return (
      <div className='TaskItem py-3 px-5'>
        <h2 className="text-xl font-bold text-left mb-4">{props.title}</h2>
        {props.dueDate && <p className='text-left'>Due on: {props.dueDate}</p>}
        {props.completedAtDate && <p className='text-left'>Completed on: {props.completedAtDate}</p>}
        <p className='text-left'>Assignee: {props.assigneeName}</p>
      </div>
    )
}

export default TaskCard;
