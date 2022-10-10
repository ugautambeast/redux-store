import * as userTypes from "./userType";

export const actionUpdateProduct = (data) => {
    return {
        type: userTypes.UPDATE_PRODUCTS,
        payload: data,
    };
};
export const actionAddToCart = (data) => {
    return {
        type: userTypes.ADD_TO_CART,
        payload: data,
    };
};
export const actionUpdateCartQuatity = (data) => {
    return {
        type: userTypes.UPDATE_CART_QUANTITY,
        payload: data,
    };
};
export const actionRemoveFromCart = (data) => {
    return {
        type: userTypes.REMOVE_FROM_CART,
        payload: data,
    };
};
export const actionToggleCart = () => {
    return {
        type: userTypes.TOGGLE_CART,
    };
};
export const actionAddMultipleToCart = (data) => {
    return {
        type: userTypes.ADD_MULTIPLE_TO_CART,
        payload: data,
    };
};
export const actionUpdateCategory = (data) => {
    return {
        type: userTypes.UPDATE_CATEGORIES,
        payload: data,
    };
};
export const actionUpdateCurrentCategory = (data) => {
    return {
        type: userTypes.UPDATE_CURRENT_CATEGORY,
        payload: data,
    };
};

