import React, { useState, Fragment } from "react";
import "./App.css";
import NewTask from "./Components/Tasks/NewTask";
import TaskList from "./Components/Tasks/TaskList";
import styles from "./App.module.css";


function App() {

  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (taskName, taskCategory) => {
      setTaskList((prevTaskList) => {
        return [...prevTaskList, {name: taskName, category: taskCategory, id: Math.random().toString()}]
      });
  };

  return (
    <Fragment>
      <h1 className={styles.mainHeader}>Keep track of your tasks!</h1>
      <NewTask onAddTask={addTaskHandler} />
      <TaskList tasks={taskList} />
    </Fragment>
  );
}

export default App;
