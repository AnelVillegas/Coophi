
const elementReducer = (state = [] , action) => {
    switch (action.type){
        case 'ADD_ELEMENT':
            return state.concat([action.data]);
        default:
            return state;
    }
    
}

export default elementReducer;