import React, { useRef } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./NewTask.module.css";

const NewTask = (props) => {
  const nameInputRef = useRef();
  const categoryInputRef = useRef();

  const addTaskHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;

    props.onAddTask(enteredName, enteredCategory);

    nameInputRef.current.value = '';
    categoryInputRef.current.value = '';
  };


  return (
    <Card className={styles.form}>
      <form onSubmit={addTaskHandler}>
        <Input
          id="task_name"
          type="text"
          name="task_name"
          reference={nameInputRef}
        >
          Name:
        </Input>
        <Input
          id="task_category"
          type="text"
          name="task_category"
          reference={categoryInputRef}
        >
          Category:
        </Input>
        <Button type="submit">Start</Button>
      </form>
    </Card>
  );
};

export default NewTask;
