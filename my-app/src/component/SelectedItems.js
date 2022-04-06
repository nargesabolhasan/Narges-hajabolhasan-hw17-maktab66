import React, { useContext } from 'react'
import { SelectedContext } from './context/SelectedContext'
import ListOfItems from './ListOfItems'

const SelectedItems = () => {
    const { state } = useContext(SelectedContext)
    return (
        <div className="SelectedItems">
            <h1>Selected Items</h1>
            {state.map(item =>
                <ListOfItems
                    key={item.id}
                    inputId={+item.id}
                    typeInput="hidden"
                >{item.text}</ListOfItems>)}
        </div>
    )
}

export default SelectedItems
