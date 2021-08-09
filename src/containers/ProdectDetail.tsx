import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveSelectedProduct, selectedProduct, fetchProduct } from '../redux/actions/productActions';
import { RootState } from '../redux/reducers/index';

const ProductDetail: React.FC = () => {
    // const productObj = useParams()
    const product = useSelector((state: RootState) => {
        return state.product;
    });
    const { image, title, price, category, description } = product
    let { productId } = useParams<{ productId: string }>();
    const dispatch = useDispatch()
    // const fetchProductDetail = async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => console.log(err))
    //     dispatch(selectedProduct(response?.data))
    // }

    useEffect(() => {
        if (productId && productId !== '') dispatch(fetchProduct(productId))
        return ()=>{
            dispatch(RemoveSelectedProduct())
        }
    }, [productId])

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div style={{paddingTop:'40px'}}>...Loading</div>
            ) :
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical diver">
                            AND
                        </div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img src={image} alt="" className="ui fluid image" />
                            </div>
                            <div className="column rp">
                                <img src="" alt="" />
                                <h1>{title}</h1>
                                <h2>
                                    <a href="" className="ui teal tag label">$ {price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex={0}>
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Card</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default ProductDetail;