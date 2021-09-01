import React from 'react';
import Button from "../../UI/Button";
import styles from "./Stopper.module.css";

const Stopper = props => {
    return (
        <div className={styles.stopper}>
            <div>
                <p>00:00:00</p>
            </div>
            <div>
                <Button type="button">Start</Button>
                <Button type="button">Delete</Button>
            </div>
        </div>
    )
}

export default Stopper;