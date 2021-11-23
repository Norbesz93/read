import React from 'react';
import './App.css';
import List from './Components/List';
import TaskCreator from './Components/TaskCreator';
import api from './Api/TodoApi';


function App() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [tasks,setTasks] = React.useState([])

  const getTasks = async () =>{
    setIsLoading(true)
    const response = await api.get()
    setIsLoading(false)
    if(response && response.status<300){ 
    setTasks(response.data)
    }else {alert("baj van")}
  }

  
  const createTask = async (newTask) => {
    setIsLoading(true)
    const response = await api.post(newTask)  
    setIsLoading(false)
    if(response && response.status<300){ 
      setTasks(response.data)
      }else {alert("baj van")}
  };
  
  const deleteTask = async (id) => {
    setIsLoading(true)
    const response = await api.del(id)  
    setIsLoading(false)
    if(response && response.status<300){ 
      setTasks(response.data)
      }else {alert("baj van")}
  };
  
  React.useEffect(() => {getTasks()}, [])
  return (
    <>
      {isLoading &&<div id="loading">Loading</div>}
        <h1>ToDo List</h1>
          <TaskCreator onSave={createTask}/>
        <div id="list">
          {tasks.map(task =>  <List key={task.id} id={task.id} del={deleteTask} title={task.title} isCompleted={task.isCompleted} />) }
        </div>
    </>
  );
}

export default App;
