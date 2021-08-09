
import React from 'react'
import { ActionTypes } from '../constants/actionTypes';

const initialState = {
    products: []
}
export const productReducer = (state: any = initialState, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}
export const selectedProductRedcer = (state: any = {}, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}