import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <ul className={styles.listTask}>
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          taskName={task.name}
          taskCategory={task.category}
        ></TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
