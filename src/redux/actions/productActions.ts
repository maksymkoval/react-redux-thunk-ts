
import React, { FC } from 'react';
import fakeStoreApi from '../../apis/fakeStoreApi';
import { ActionTypes } from '../constants/actionTypes'
// import { Dispatch } from 'redux';


export const fetchProducts = () => async (dispatch:any) => {
    const response = await fakeStoreApi.get('/products');
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}
export const fetchProduct = (id:string|number) => async (dispatch:any) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
}

export const setProducts = (products:any) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product:any) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const RemoveSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}