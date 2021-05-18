import React, { useState } from 'react';
import './index.css';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form class="form" onSubmit={handleSubmit}>
            <input class="inputfeild" value={userInput} type="text" onChange={handleChange} placeholder="   Type Your Task Here"/>
            <button class="button">Submit</button>
        </form>
    );
};

export default ToDoForm;