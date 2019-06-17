const INITIAL_STATE = { value: 'Opa' }

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'VALUE_CHANGED':
            //state.value = action.payload modificando o estado atual.
            return { value: action.payload } //cria um novo objeto e evolui o estado atual.
        default:
            return state
    }
}