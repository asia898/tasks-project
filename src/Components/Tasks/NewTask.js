import React, { useState, useReducer, useEffect } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./NewTask.module.css";

const nameReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 3}
  }
  
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length > 3}
  }


  return {value: '', isValid: null};
}

const categoryReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 0 && action.val.trim().length < 11}
  }
  
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length > 0 && state.value.trim().length < 11}
  }

  return {value: '', isValid: null};
}



const NewTask = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameState, dispatchName] = useReducer(nameReducer, {value: '', isValid: null});
  const [categoryState, dispatchCategory] = useReducer(categoryReducer, {value: '', isValid: null});

  const { isValid: nameIsValid } = nameState;
  const { isValid: categoryIsValid } = categoryState;

  useEffect(() => {
    const indentifier = setTimeout( () => {
      setFormIsValid(nameIsValid && categoryIsValid);
    }, 250);

    return () => {
      clearTimeout(indentifier);
    };
  }, [nameIsValid, categoryIsValid]);

  const addTaskHandler = (event) => {
    event.preventDefault();

    props.onAddTask(nameState.value, categoryState.value);


    dispatchName({ type: ''});
    dispatchCategory({ type: ''});
  };

  const nameChangeHandler = (event) => {
    dispatchName({ type: 'USER_INPUT', val: event.target.value });
  }

  const categoryChangeHandler = (event) => {
    dispatchCategory({ type: 'USER_INPUT', val: event.target.value });
  }

  const validateNameHandler = (event) => {
    dispatchName({ type: 'INPUT_BLUR'});
  }

  const validateCategoryHandler = (event) => {
    dispatchCategory({ type: 'INPUT_BLUR'});
  }


  return (
    <Card className={styles.form}>
      <form onSubmit={addTaskHandler}>
        <Input
          validity={nameIsValid}
          id="task_name"
          type="text"
          name="task_name"
          value={nameState.value}
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
        >
          Name:
        </Input>
        <Input
          validity={categoryIsValid}
          id="task_category"
          type="text"
          name="task_category"
          value={categoryState.value}
          onChange={categoryChangeHandler}
          onBlur={validateCategoryHandler}
        >
          Category:
        </Input>
        <Button type="submit" disabled={!formIsValid}>Start</Button>
      </form>
    </Card>
  );
};

export default NewTask;
