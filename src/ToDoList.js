import React from 'react';
import ToDo from './ToDo';
import './index.css';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div class="list">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button class="clearbutton" style={{margin: '20px'}} onClick={handleFilter}>Remove Completed Tasks</button>
        </div>
    );
};

export default ToDoList;