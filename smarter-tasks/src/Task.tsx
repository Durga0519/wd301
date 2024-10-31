// TaskItem.tsx
import "./TaskCard.css";
import { TaskItem as TaskItemType } from "./types";

interface TaskProps {
  item: TaskItemType;
  removeTask: (task: TaskItemType) => void; // Accepts a TaskItemType
}

const TaskItem = ({ item, removeTask }: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${item.id || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{item.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.description}
          </p>
        </div>

        <button
          className="deleteTaskButton bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition duration-200"
          onClick={() => removeTask(item)} // Pass the entire task
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
