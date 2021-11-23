import React from "react";

const TaskCreator = ({onSave}) =>{

const [newTask, setNewtask]=React.useState("")

const save = () =>{
onSave(newTask)
setNewtask("")
}

 return(
    <div id="menu">
            <label>Your new to-do</label>
            <input type="text" value={newTask} onChange={(e)=>setNewtask(e.target.value)} placeholder="enter new task"/>
            <button onClick={save}>add task</button>
    </div>
 );
}

export default TaskCreator;