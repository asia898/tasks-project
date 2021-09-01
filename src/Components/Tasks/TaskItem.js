import React from 'react';
import Stopper from "./TaskFeatures/Stopper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./TaskItem.module.css";

const TaskItem = props => {
    return (
        <Card>
            <li className={styles.listElement}>
                <Button>x</Button>
                <p>{props.taskName}</p>
                <p>{props.taskCategory}</p>
                <Stopper></Stopper>
            </li>
        </Card>
    );
}

export default TaskItem;