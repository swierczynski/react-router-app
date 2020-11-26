import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'

const products =['car','bike','motocyckle']

const ProductListPage = () => {

    const productsList = products.map(product => {
        return (
            <li key={product}>
                <Link to={`/product/${product}`}>{product}</Link>
            </li>
        )
    })

    return ( 
        <div className="products">
            <h2>Lista produktów</h2>
            <div>
                <ul>
                    {productsList}
                </ul>
            </div>
        </div>
     );
}
 
export default ProductListPage;