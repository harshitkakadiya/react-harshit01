import {BUY_CHOCOLATE }from "./ChocolateConstant"

const initialState ={
    numOfChocolate:20
}

const Chocolatereducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_CHOCOLATE:
            return{
                ...state,
                numOfChocolate:state.numOfChocolate - 1
            }
        default:return state
    }
}

export default Chocolatereducer