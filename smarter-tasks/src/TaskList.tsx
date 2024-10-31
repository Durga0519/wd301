// TaskList.tsx
import "./TaskCard.css";
import { TaskItem as TaskItemType } from "./types";
import TaskItem from "./Task"; // Make sure this points to the updated TaskItem component

interface TaskListProps {
  tasks: TaskItemType[];
  onDeleteTask: (task: TaskItemType) => void; // Accept a TaskItemType
}

const TaskList = ({ tasks, onDeleteTask }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem item={task} removeTask={onDeleteTask} />{" "}
          {/* Pass the whole task */}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
