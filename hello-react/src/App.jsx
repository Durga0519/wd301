import TaskCard from './Taskcard';

function App() {
  return (
    <div>
      {/* Pending Tasks */}
      <div>
        <h1>Pending</h1>
        <TaskCard 
          title="Build the website with static content" 
          dueDate="2024-10-30" 
          assigneeName="John Doe" 
          status="pending" 
        />
        <TaskCard 
          title="Add blog" 
          dueDate="2024-11-05" 
          assigneeName="Jane Smith" 
          status="pending" 
        />
      </div>
      
      {/* Done Tasks */}
      <div>
        <h1>Done</h1>
        <TaskCard 
          title="Design the mockup" 
          completedAtDate="2024-10-15" 
          assigneeName="Alice" 
          status="done" 
        />
        <TaskCard 
          title="Get approval from principal" 
          completedAtDate="2024-10-17" 
          assigneeName="Bob" 
          status="done" 
        />
      </div>
    </div>
  );
}

export default App;
