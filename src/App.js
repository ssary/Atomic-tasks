import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false);



  const fetchTasksServer = async ()=>{
    return await fetch('http://localhost:5000/tasks')
    .then((data)=>data.json())
  }

  const deleteTask = async (taskid)=>{
    await axios.delete(`http://localhost:5000/tasks/${taskid}`).then(console.log(`${taskid}deleted successfully`))
    setTasks(tasks.filter((task)=>(task.id !== taskid)))
  }

  const toggleTask = async (taskid)=>{
    
    let toggledTask;
    setTasks(tasks.map((task)=>{
      if(task.id === taskid)  {
        toggledTask = {...task, 'reminder': !task.reminder}
        return toggledTask
      }
      else
        return task;
      }))
      await axios.put(`http://localhost:5000/tasks/${taskid}`, toggledTask)
  }

  const appendTask = async (task)=>{
    let id = uuidv4();
    const newTask = {id, ...task}
    await axios.post('http://localhost:5000/tasks', newTask)
    setTasks([...tasks, newTask])
  }

  const toggleShowAddTask = ()=>{
    setShowAddTask(!showAddTask)
  }

  useEffect(()=>{
    const fetchedTasks = async()=>{
      const data = await fetchTasksServer()
      setTasks(data);
    };
    fetchedTasks();
  }, [])
  return (
    <Router>
      <div className="container">
        <Header title='Atomic tasks' toggle={toggleShowAddTask} addTaskShown={showAddTask}/>
        <Routes>
          <Route path='/' element={
          <>
          {showAddTask && <AddTask onSubmit={appendTask}/>}
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>
          </>}
          />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
