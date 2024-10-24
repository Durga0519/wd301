import React from 'react'; 
import TaskCard from './Taskcard';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="font-bold text-4xl">Smarter Tasks</h1>
        <p className='text-gray-700'>
          <b>Project:</b> Graduation Final Year Project (Revamp College Website) 
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="border p-4 rounded-xl">
          <h1 className="font-bold text-3xl mb-3 text-gray-800">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="11th April" assigneeName="Rohit S" />
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" />
          <p className="bg-gray-400 font-bold text-left">+ New Task</p>
        </div>
        <div className="border p-4 rounded-xl ml-4">
          <h1 className="font-bold text-3xl mb-3 text-gray-800">Done</h1>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M" />
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S" />
        </div>
      </div>
    </div>
  );
}

export default App;
