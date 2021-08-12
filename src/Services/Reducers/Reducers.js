import { ADD_TO_CART } from '../constants';
const INITIAL_STATE = {
    cartData: []
};
const cartItems = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('Reducer ===> ',action.data);
            return {
                ...state,
                cartData:action.data

            }
        
            default:
            return state
    }


}
export default cartItems;