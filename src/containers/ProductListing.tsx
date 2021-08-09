import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing: React.FC = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
        // console.log('Products', products)
    }, [])
    return (
        <div className="ui grid container" style={{ marginTop: '20px' }}>
            <ProductComponent />
        </div>
    )
}
export default ProductListing;