import React from 'react';
import {Link} from 'react-router-dom'
import Product from '../components/Product'

const ProductPage = (props) => {
    console.log(props);
    return ( 
        <>
            <h2>Strona produktu</h2>
            <Product name={props.match.params.name}/>
            <Link to='/products'>Powrót do listy produktów</Link>
        </>
     );
}
 
export default ProductPage;