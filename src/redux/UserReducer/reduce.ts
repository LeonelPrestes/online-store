//Definindo o modelo de usuário
interface User {
    name: string;
    email: string;
}
//Definindo o modelo do estado
interface UserState {
 user: User | null;
}
//Estado inicial
const initialState: UserState = {
    user: null,
}

//Reducer:guarda o estado que desejamos compartilhar na aplicação
// Tambem manipula e altera o estado

//Definindo o modelo da ação
interface UserAction {
    type: string;
    payload?: User;
}

//Todo reducer recebe dois parâmetros: o estado atual e a ação que será executada
//Todo reducer retorna um novo estado atualizado após a ação ser executada	
export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    if (action.type === "user/login") {
        return {
            ...state, //Spread (...). Garante outras propriedades do estado não sejam perdidas ou alteradas
            user: action.payload as User,        
        }
    } else if (action.type === "user/logout") {
        return {
            ...state,//Spread (...). Garante outras propriedades do estado não sejam perdidas ou alteradas
            user: null,
        }
    };
    
    return state;
}