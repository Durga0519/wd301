import './TaskCard.css';

const TaskCard = ({ title, dueDate, completedAtDate, assigneeName, status }) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      
      {/* Conditionally show due date or completed date */}
      {status === 'pending' && <p>Due Date: {dueDate}</p>}
      {status === 'done' && <p>Completed on: {completedAtDate}</p>}
      
      {/* Assignee is shown in both lists */}
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
