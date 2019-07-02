const initialState = {
    stories: []
}

const stories = (state = initialState, action = {}) =>{
    switch (action.type){
        case 'FETCH_STORIES':
            return {...state, stories: actions.data, }
        default:
            return state
    }
}
export default stories