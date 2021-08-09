import React from 'react'
import { applyMiddleware, combineReducers } from 'redux'
import { productReducer, selectedProductRedcer } from './productReducer';
export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductRedcer
})

export type RootState = ReturnType<typeof reducers>