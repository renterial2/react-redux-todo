const initialState = {
    todos: [
        // {
        //     task: '',
        //     done: false
        // }
    ]
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            const newTodos = state.todos.slice()
            newTodos.push({task: action.text, done: false})
            return {
                todos: newTodos
            }

        case 'COMPLETE_TODO':
            return {
                    todos: newTodos
            }

        default:
            return state
    }

}

export default todoReducer