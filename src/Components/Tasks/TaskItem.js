import React from 'react';
import Stopper from "./TaskFeatures/Stopper";

const TaskItem = props => {
    return (
        <li key={props.key}>
            <p>{props.taskName}</p>
            <p>{props.taskCategory}</p>
            <Stopper></Stopper>
        </li>
    );
}

export default TaskItem;