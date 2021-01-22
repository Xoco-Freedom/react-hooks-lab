import React, { useState, useEffects } from 'react';
import ToDo from './ToDo'

const AddTodo = (props) => {
    const [userInput, setUserInput] = useState('')

    function handleAddTodo(e) {
        e.preventDefault()
        props.AddItem(userInput)
        setUserInput('')
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input
                placeholder="Add item"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}

export default AddTodo;