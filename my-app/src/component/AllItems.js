import React, { useEffect, useState, useContext, useCallback } from 'react'

const AllItems = () => {
    //-----state for url items------
    const [todo, setTodo] = useState([])

    useEffect(() =>
        fetch('https://624c34b4d71863d7a806064d.mockapi.io/api/todo/todolist')
            .then(response => response.json())
            .then(data => setTodo([data]))
        , [])


    // Add/Remove checked item from list
    const selectHandler =(event) => {
       
    }

    return (
        <div className="AllItems">
            <h1>All Items</h1>
            {todo.map(item => item.map(data =>
                <ListOfItems
                    key={data.id}
                    inputId={+data.id}
                    typeInput="checkbox"
                    onchange={selectHandler}
                    >{data.todo}</ListOfItems>
            ))}
        </div>
    )
}

export default AllItems