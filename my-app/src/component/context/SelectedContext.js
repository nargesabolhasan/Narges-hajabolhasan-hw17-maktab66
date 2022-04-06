import { createContext, useState } from "react";
export const SelectedContext = createContext([]);

const DataContextProvider = (props) => {
    const [state, setState] = useState([])
    const { children} = props

    const value = {
        state,
        addToContext: (input) => setState([...state, input]),

        removeFromContext: (input) => {
            let listAfterDelete = state.filter(i => i.id !== input.id);
            setState( listAfterDelete )
        }
    }
    return (
        <SelectedContext.Provider value={value} >{children}</SelectedContext.Provider>
    );
};
export default DataContextProvider;