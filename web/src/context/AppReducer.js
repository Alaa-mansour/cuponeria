export default (state, action) => {
    switch(action.type) {
        case "SET_SHOPS":
            return {
                ...state,
                shops: action.payload
            };
        case "SENDING_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "REQUEST_FINISHED":
            return {
                ...state,
                loading: false
            };
        case "SET_MALLS":
            return {
                ...state,
                malls: action.payload
            };
        case "SET_CUPONS":
            return {
                ...state,
                cupons: action.payload
            };
        case "WRONG_INFO":
            return {
                ...state,
                message:  "Por favo preenche os campos!"
            };
        case "WRONG_INFO":
            return {
                ...state,
                message: "Por favor preenche os campos!"
            };
        case "SUCCESS_CREATION":
            return {
                ...state,
                message: "seu cupom foi criado com sucesso, você será redirecionado em 4 segundos!!"
            };
        case "MISSING_DATE":
            return {
                ...state,
                message: "o campo de data não pode estar vazio!!"
            };
        default:
            return state;
    }
}