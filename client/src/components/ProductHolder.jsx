import React from 'react';
import { ProductBox } from '../styles.jsx';

export default function ProductHolder({id, name, attribute, price, sku, onCheck}) {
    return(
        <ProductBox>
            <input onClick={onCheck} type="checkbox" className='delete-checkbox' id={id}></input>
            <h5>{sku}</h5>
            <h5>{name}</h5>
            <h5>{price}</h5>
            <h5>{attribute}</h5>
        </ProductBox>
    )
}