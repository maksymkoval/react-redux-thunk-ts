import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/reducers/index';

const ProductComponent: React.FC = () => {
    const products = useSelector((state: RootState) => {
        return state.allProducts.products;
    });
    const renderList = products.map((product: any) => {
        return (
            <div className="four column wide" style={{display:'flex',width:'25%'}}  key={product.id}>
                <Link to={`product/${product.id}`}>
                <div className="ui link cards">
                    <div className="ui card">
                        <div className="">
                            <img width="100%" src={product.image} alt={product.title} />
                        </div>
                        <div className="content">
                            <div className="header">
                                {product.title}
                            </div>
                            <div className="meta price">
                                ${product.price}
                            </div>
                            <div className="meta">{product.category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    })
    return (
        <>{renderList}</>
    )
}
export default ProductComponent;