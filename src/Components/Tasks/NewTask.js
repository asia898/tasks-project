import React from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./NewTask.module.css"

const NewTask = (props) => {

    const addTaskHandler = (event) => {
        event.preventDefault();
    }


    return (
        <Card className={styles.form}>
            <form>
                <Input id="task_name" type="text" name="task_name">Name:</Input>
                <Input id="task_category" type="text" name="task_category">Category:</Input>
                <Button type="submit" onClick={addTaskHandler}>Start</Button>
            </form>
        </Card>
    )

}

export default NewTask;