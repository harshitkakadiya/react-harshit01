import {BUY_CAKE }from "./CakeConstant"

const initialState ={
    numOfCake:10
}

const Cakereducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numOfCake:state.numOfCake -1
            }
        default:return state
    }
}

export default Cakereducer