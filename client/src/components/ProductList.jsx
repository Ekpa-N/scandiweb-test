import React, { useState, useEffect } from 'react';
import { deleteProductsEndpoint } from '../endpoints.js';
import { Nav, MainBody, ButtonHolder, ProductsContainer } from '../styles.jsx';
import { ProductDisplay } from './constructs.js';
import axios from 'axios';

export default function ProductList({addPage, data, theSkus}) {
    const[deleteProducts, setDeleteProducts] = useState({idArray:[]})
    const displayProducts = new ProductDisplay(data, onCheck)

    useEffect(()=>{}, [data])

    function onCheck(e) {
        if(e.target.checked) {
            let delProd = deleteProducts
            delProd.idArray.push(e.target.id)
            setDeleteProducts(delProd)
            console.log(deleteProducts)
            return
        }

        if(!e.target.checked) {
            let delProd = deleteProducts
            let newIdArray = delProd.idArray.filter(id => id !== e.target.id)
            delProd.idArray = newIdArray
            setDeleteProducts(delProd)
            console.log(deleteProducts+" to be deleted") 
            return           
        }
    }

    class submitter{
        constructor() {
            this.deleter = function (url, data) {
                const deleteData = JSON.stringify(data)           
                axios.post(url, deleteData, {
                    headers: {
                        Accept:"application/json"
                    }
                } )
                .then(response=>{
                    console.log(response.data)
                    setDeleteProducts(({idArray:[]}))
                })
                .catch(error =>{console.log(error)})
            }
        }
    }

    const deleteItems = new submitter()

    if(data.message) {
        return (
            <MainBody>
            <Nav>
                <h2>Product List</h2>
                <ButtonHolder>
                    <button onClick={addPage}>ADD</button>
                    <button
                    onClick={()=>{deleteItems.deleter(deleteProductsEndpoint, deleteProducts)}}>MASS DELETE</button>
                </ButtonHolder>
            </Nav>
            <ProductsContainer>
                <section>{data.message}</section>
            </ProductsContainer>
        </MainBody>
        )
    }
    
    return (
        <MainBody>
            <Nav>
                <h2>Product List</h2>
                <ButtonHolder>
                    <button onClick={addPage}>ADD</button>
                    <button
                    onClick={()=>{deleteItems.deleter(deleteProductsEndpoint, deleteProducts)}}>MASS DELETE</button>
                </ButtonHolder>
            </Nav>
            <ProductsContainer>
                {displayProducts.display()}
            </ProductsContainer>
        </MainBody>
    )
}