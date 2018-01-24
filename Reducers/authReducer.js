
const initialState = {
    token: ''
}

const auth = (state = initialState, action) => {
    switch(action.type) {

        case 'SET_TOKEN':
            return { token: action.token }

        default:
            return state
    }
}

export default auth