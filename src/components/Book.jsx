import { useReducer } from "react";

const initialState = {
    cpt : 0,
    pays: 'France',
    number: 0,
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'incr':
            return { ...state, cpt: state.cpt + 1 }
        case 'decr':
            return { ...state, cpt: state.cpt - 1 }
        case 'RESET':
            return { ...state, cpt: 0 }
        case 'setNumber':
            return { ...state, number: action.value }
        case 'add':
            return { ...state, cpt: state.cpt + parseInt(state.number), number: ''}
        default:
            return state
    }
}


const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <p>Compteur : {state.cpt}</p>
            <button onClick={() => dispatch({ type: 'decr' })}>-</button>
            <button onClick={() => dispatch({ type: 'incr' })}>+</button>
            <hr />
            <input type="number" value={state.number} onChange={(e) => dispatch({ type: 'setNumber', value: e.target.value })} />
            <button onClick={() => dispatch({ type: 'add' })}>Ajouter</button>
            <hr />
        </>
    )
}

export default Reducer