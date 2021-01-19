

const TransectionReducer = ((state, action) => {

    switch (action.type) {
        case "ADDTRANSECTION": {
            return [action.payload, ...state]

        }

        default:

            return state;

    }
})

export default TransectionReducer;