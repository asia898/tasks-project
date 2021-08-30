import React from 'react';
import Stopper from "./TaskFeatures/Stopper";

const TaskItem = props => {
    return (
        <li>
            <p>Category</p>
            <p>Task Name</p>
            <Stopper></Stopper>
        </li>
    );
}

export default TaskItem;