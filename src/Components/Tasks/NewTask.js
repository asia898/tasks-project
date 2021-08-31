import React, { useState } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./NewTask.module.css";

const NewTask = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const addTaskHandler = (event) => {
    event.preventDefault();

    //Instead of printing the value to the console we will need to call a function to add it to the list
    console.log(enteredName, enteredCategory);

    setEnteredName("");
    setEnteredCategory("");

    props.onAddTask(enteredName, enteredCategory);
  };

  const taskNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  return (
    <Card className={styles.form}>
      <form onSubmit={addTaskHandler}>
        <Input
          id="task_name"
          type="text"
          name="task_name"
          value={enteredName}
          onChange={taskNameChangeHandler}
        >
          Name:
        </Input>
        <Input
          id="task_category"
          type="text"
          name="task_category"
          value={enteredCategory}
          onChange={categoryChangeHandler}
        >
          Category:
        </Input>
        <Button type="submit">Start</Button>
      </form>
    </Card>
  );
};

export default NewTask;
