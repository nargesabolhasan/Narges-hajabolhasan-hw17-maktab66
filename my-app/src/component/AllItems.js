import React, { useEffect, useState, useContext } from 'react'
import ListOfItems from './ListOfItems'
import { SelectedContext } from './context/SelectedContext'

const AllItems = () => {
    //-----state for url items------
    const [todo, setTodo] = useState([])
    const { addToContext, removeFromContext } = useContext(SelectedContext)

    useEffect(() =>
        fetch('https://624c34b4d71863d7a806064d.mockapi.io/api/todo/todolist')
            .then(response => response.json())
            .then(data => setTodo([data]))
        , [])


    // Add/Remove checked item from list
    const selectHandler =(event) => {
        const targetValue = event.target.value
        const TargetId = event.target.id
        const ValueAndAndId = {
            text: targetValue,
            id: TargetId
        }
        event.target.checked ? addToContext(ValueAndAndId) : removeFromContext(ValueAndAndId)
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
