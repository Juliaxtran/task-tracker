import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dr. Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Piano Lessons',
      day: 'Feb 6th at 4:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Church',
      day: 'Feb 11th at 1pm',
      reminder: false,
    }
  ]);

// Delete Task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id ))
}


  return (
    <div className="container">
      <Header />
     {tasks.length > 0 ?
     (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks to Show') }
    </div>
  );
}

export default App;
