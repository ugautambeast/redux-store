import * as userTypes from "./userType";

const INITIAL_STATE = {
    products: [],
    cartOpen: false,
    cart: [],
    categories: [],
    currentCategory: '',
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // TODO: Add a comment describing the functionality of the UPDATE_PRODUCTS case
        // Your comment here
        case userTypes.UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.payload.products],
            };

        case userTypes.ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.payload],
            };

        case userTypes.ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.payload.products],
            };

        // TODO: Add a comment describing the functionality of the UPDATE_CART_QUANTITY case
        // Your comment here
        case userTypes.UPDATE_CART_QUANTITY:
            const { _id, purchaseQuantity } = action.payload;

            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((product) => {
                    if (_id === product._id) {
                        product.purchaseQuantity = purchaseQuantity;
                    }
                    return product;
                }),
            };

        // TODO: Add a comment describing the functionality of the REMOVE_FROM_CART case
        // Your comment here
        case userTypes.REMOVE_FROM_CART:
            let newState = state.cart.filter((product) => {
                return product._id !== action.payload._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState,
            };

        case userTypes.CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: [],
            };

        case userTypes.TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen,
            };

        case userTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload.categories],
            };

        case userTypes.UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload.currentCategory,
            };

        // TODO: Add a comment describing what the default case is for
        // Your comment here
        default:
            return state;
    }
}

export default userReducer;