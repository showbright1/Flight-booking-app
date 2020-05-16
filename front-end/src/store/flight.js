const FLIGHT_LIST = 'FLIGHT_LIST';

export function flightList(result) {
    return {
        type: FLIGHT_LIST,
        result
    }
}

const initalState = {
    result: {}
}

export default function flight(state = initalState, action) {
    switch(action.type) {
        case FLIGHT_LIST: return { ...state, result: action.result }
        default: return state
    }
}