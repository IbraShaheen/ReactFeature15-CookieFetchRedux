import axios from "axios";

// ACTION TYPES
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// ACTIONS
export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: { newProduct },
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});

export const updateProduct = (updatedProduct) => ({
  type: UPDATE_PRODUCT,
  payload: { updatedProduct: updatedProduct },
});


export const fetchProducts =  () => {

  return async(dispatch)=> {
      try {
          const res = await axios.get("http://localhost:8000/products")
        dispatch({
          type: FETCH_PRODUCTS,
          payload : res.data

        })
        
      } catch (error) {
      console.log(error)
      }

  }

};
