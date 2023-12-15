

import React, { useState } from "react";
import TasksManagement from "./../TasksManagement/TasksManagement";
import "./TaskInput.css";

const TaskInput = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

// Add task
  const addTask = (e) => {
    e.preventDefault();
    task.trim() !== "" ? setTasks([...tasks, task]) : alert("Enter your task!");
    setTask("");
  };

// Task Delete
  const deleteTask = (id) => {
    const deleteSingleTask = tasks.filter((task, index) => index !== id);
    setTasks(deleteSingleTask);
  };

// Edit Task
    const editTask = (id, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[id] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="workManagement">
      <h1 className="taskTitle">Task Management</h1>
      <div className="TasksInputForm">
        <div className="InputTask">
          <form onSubmit={addTask}>
            <input className="addTaskInput"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="Type Your Task.................."
              autoFocus={true}
            />
            <button className="TaskAddBtn">Add Task</button>
          </form>
        </div>
      </div>
      <div className="tasksManagement">
        {tasks ?  
        tasks.map((task, index) => (
          <TasksManagement
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
            tasks={tasks}
          />
        )) : "No Task Found"}
      </div>
    </div>
  );
};

export default TaskInput;
