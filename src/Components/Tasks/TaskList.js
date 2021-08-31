import React from "react";
import Card from "../UI/Card";
import TaskItem from "./TaskItem";

const TaskList = (props) => {

    

  return (
    <Card>
      <ul>
        {props.tasks.map((task) => (
          <TaskItem key={task.id} taskName={task.name} taskCategory={task.category}></TaskItem>
        ))}
      </ul>
    </Card>
  );
};

export default TaskList;
