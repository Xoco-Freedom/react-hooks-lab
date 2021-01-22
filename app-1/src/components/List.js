import React, { useState, useEffects } from 'react';
import Todo from './ToDo';

const List = (props) => {
    return (
        <div>
            {props.list.map((item, index) => {
                return <Todo item={item} key={index} />
            })}
        </div>
    )
}

export default List;