import {
    FIND_ALL_PRODUCTS,
    FIND_PRODUCT_BY_PRODUCT_ID,
    FIND_PRODUCT_BY_PRODUCT_NAME
} from "../actions/product-actions";

const ProductReducer =  (state = [], action) => {
    switch(action.type) {
        case FIND_ALL_PRODUCTS:
            return action.findAllProducts;
        case FIND_PRODUCT_BY_PRODUCT_ID:
            return action.findProductById;
        case FIND_PRODUCT_BY_PRODUCT_NAME:
            return action.findProductByName;
        default:
            return state;
        
    }
}

export default ProductReducer;