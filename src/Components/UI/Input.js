import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    return(
        <div className={styles.formItem}>
            <label className={styles.labelItem} htmlFor={props.id}>{props.children}</label>
            <input className={styles.inputItem} id={props.id} type={props.type} name={props.name} value={props.value} onChange={props.onChange}></input>
        </div>
    );
}

export default Input;