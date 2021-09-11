import { combineReducers} from "redux";
import products from "./productsReducers";


const createRootReducer = () => combineReducers({
    products
})


export default createRootReducer