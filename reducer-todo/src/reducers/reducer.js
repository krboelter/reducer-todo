export const initialState = {
    item: "",
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Read a book',
        completed: false,
        id: 8503883284
    },
    {
        item: 'Make Dinner',
        completed: false,
        id: 4855569409
    }]
}


export function reducer(state, action) {
    switch(action.type) {
        
        case "INPUT_ITEM":
            return {
                ...state,
                item: action.payload
            }
        case "ADD_TODO":
            return {
                ...state,
                item: "",
                todos: [...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }]
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => (
                    todo.id === action.payload ? {...todo, completed: !todo.completed}: todo
                ))
            }
        case "CLEAR":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
                return state;
    }
}