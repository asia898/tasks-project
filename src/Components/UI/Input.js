import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    
    return(
        <div className={styles.formItem}>
            <label className={`${styles.labelItem} ${props.validity === false ? styles.invalid : ''}`} htmlFor={props.id}>{props.children}</label>
            <input className={`${styles.inputItem} ${props.validity === false ? styles.invalid : ''}`} id={props.id} onBlur={props.onBlur} onChange={props.onChange} type={props.type} name={props.name} value={props.value}></input>
        </div>
    );
}

export default Input;