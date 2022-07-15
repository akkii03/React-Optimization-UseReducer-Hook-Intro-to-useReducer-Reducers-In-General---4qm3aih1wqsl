const counterReducer = (state,action) =>{
    switch(action.type) {
        case"add": 
        console.log("inside reducer fun inc ",action.payload=state.count+1)
        return state = action.payload-1;

        case"minus":
        console.log("inside the reducer fun dec",action.payload = state.count-1);
        return state = action.payload-1;
        
        default:
            console.log("default case the state is ",state);
            return state;
    }

}

export {counterReducer}