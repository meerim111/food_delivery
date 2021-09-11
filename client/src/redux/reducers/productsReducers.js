import t from "../actionTypes/productActionTypes"


const getCartFromLS = () => {
    let cart
    try {
       cart = JSON.parse(localStorage.getItem("cart")) || {}
    }  catch (e) {
        cart = {}
    }
    return cart
}



const initialState = {
    productList :[],
    cartList:{...getCartFromLS()}
}

export default (state=initialState,action) => {
    switch (action.type) {
        case t.GET_PRODUCTS_LIST:
            return ({
                ...state,
                productList:action.data
            })
        case t.ADD_TO_CART:
            localStorage.setItem("cart,",JSON.stringify(action.cartList))
            return ({
                ...state,
               cartList:action.cartList

            })
        default:
            return state
    }
}