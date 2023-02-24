import * as service from "../services/product-service";

export const FIND_ALL_PRODUCTS = "FIND_ALL_PRODUCTS";
export const FIND_PRODUCT_BY_PRODUCT_NAME = "FIND_PRODUCT_BY_PRODUCT_NAME";

export const findAllProducts = async (dispatch) => {
    const allProducts = await service.findAllProducts();
    dispatch({
        type: FIND_ALL_PRODUCTS,
        allProducts
    });
}

export const findProductByName = async (dispatch, productName) => {
    const product = await service.findProductByProductName(productName);
    dispatch({
        type:FIND_PRODUCT_BY_PRODUCT_NAME,
        product
    })
}

export const findProductById = async (dispatch, pid) => {
    const product = await service.findProductByProductId(pid);
    dispatch({
        type:FIND_PRODUCT_BY_PRODUCT_ID,
        product
    })
}
