import React, { useEffect, useState } from 'react';
import { Nav, ButtonHolder, ProductForm, MainBody } from '../styles.jsx';
import { useNavigate } from 'react-router-dom'
import { Submitter, ProductDVD, ProductBook, ProductFurniture} from './constructs.js';
import axios from 'axios'
import { addProductsEndpoint } from '../endpoints.js';

export default function ProductAdd({theSkus}) {
    const nav = useNavigate()
    const initialFormData = {
        sku: "",
        name: "",
        price: "",
        productType: "DVD"
    }

    class AttributeSet {
        constructor() {
            this.book = function () {
                return { weight: "" };
            };

            this.furniture = function () {
                return { 
                    height: "",
                    width: "",
                    length: "",
                    hwl: function () {
                        return this.height+" * "+this.width+" * "+this.length
                    }
                };
            };

            this.dvd = function () {
                return { size: "" };
            };

            this.onChange = function (event, form, stateManager) {
                stateManager({...form, [event.target.id]:event.target.value})    
            }
        }
    }

    const[formData, setFormData] = useState(initialFormData)
    const[attributes, setAttributes] = useState({size: ""})
    const newAttribute = new AttributeSet()
    const saver = new Submitter(addProductsEndpoint, formData, attributes, theSkus, nav)
    const type = formData.productType.toLowerCase()
    const products = {
        DVD: new ProductDVD(addProductsEndpoint, formData, attributes, theSkus, nav, attributes, setAttributes),
        Book: new ProductBook(addProductsEndpoint, formData, attributes, theSkus, nav, attributes, setAttributes),
        Furniture: new ProductFurniture(addProductsEndpoint, formData, attributes, theSkus, nav, attributes, setAttributes)        
    }

  
    const onTypeChange = (e) => {
        setFormData({...formData, [e.target.id]:e.target.value})
        let theType = e.target.value.toLowerCase()
        setAttributes(newAttribute[theType]())
    }

    return(
        <MainBody>
        <Nav>
            <h2>Product Add</h2>
                <ButtonHolder>
                    <button onClick={()=>{saver[type]()}}>SAVE</button>
                    <button onClick={()=>{saver.onCancel()}}>CANCEL</button>
                </ButtonHolder>
        </Nav>
        <ProductForm id='product_form'>
            <div>
            <label htmlFor='sku'>SKU</label>
            <input onChange={(e)=>{saver.onChange(e, formData, setFormData)}} id='sku' type='text' value={formData.sku}/>
            </div>
            <div>
            <label htmlFor='name'>Name</label>
            <input onChange={(e)=>{saver.onChange(e, formData, setFormData)}} id='name' type='text' value={formData.name}/>
            </div>
            <div>
            <label htmlFor='price'>Price ($)</label>
            <input onChange={(e)=>{saver.onChange(e, formData, setFormData)}} id='price' type='number' value={formData.price}/>
            </div>
            <div>
            <label htmlFor='productType'>Type Switcher</label>
            <select id='productType' onChange={onTypeChange}>   
                <option value = "DVD"> DVD   
                </option>  
                <option value = "Furniture"> Furniture   
                </option>  
                <option value = "Book"> Book  
                </option>
            </select>  
            </div>
            {products[formData.productType][formData.productType]()}
        </ProductForm>
        </MainBody>
    )
}