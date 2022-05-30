import React, { useEffect, useState } from 'react';
import { Nav, ButtonHolder, ProductForm } from '../styles.jsx';
import { useNavigate } from 'react-router-dom'
import { ProductSwitcher } from './constructs.js';
import axios from 'axios'
import { addProductsEndpoint } from '../endpoints.js';

export default function ProductAdd({theSkus}) {
    const nav = useNavigate()
    const initialFormData = {
        sku: "",
        name: "",
        price: "",
        productType: "dvd"
    }

    class attributeSet {
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
        }
    }

    class submitter {
        constructor() {
            this.book = function (url, formData, attribute) {
                const{sku, name, price} = formData
                const {weight} = attribute 
                let completedForm = [sku, name, price, weight].find(item => item === "")
                if(completedForm !== undefined) {
                    window.alert("Please submit required data")
                    return
                }     
                const skuExists = theSkus.find(item => item == sku)
                if(skuExists) {
                    window.alert("Sku must be unique")
                    return
                }           
                const postData = JSON.stringify({sku:sku, name:name, price:price,
                    attribute: `Weight: ${weight} kg`})            
                axios.post(url, postData, {
                    headers: {
                        Accept:"application/json"
                    }
                } )
                .then(response=>{
                    console.log(response.data)
                    nav('/')
                })
                .catch(error =>{console.log(error)})
            }

            this.dvd = function (url, formData, attribute) {
                const{sku, name, price} = formData
                const {size} = attribute 
                let completedForm = [sku, name, price, size].find(item => item === "")
                if(completedForm !== undefined) {
                    window.alert("Please complete all fields")
                    return
                }     
                const skuExists = theSkus.find(item => item == sku)
                if(skuExists) {
                    window.alert("Sku must be unique")
                    return
                }   
                const postData = JSON.stringify({sku:sku, name:name+" DISC", price:price,
                    attribute: "Size: "+size+" MB"})            
                axios.post(url, postData, {
                    headers: {
                        Accept:"application/json"
                    }
                } )
                .then(response=>{
                    console.log(response.data)
                    nav('/')
                })
                .catch(error =>{console.log(error)})
            }

            this.furniture = function (url, formData, attribute) {
                const{sku, name, price} = formData
                const {height, width, length} = attribute                 
                let completedForm = [sku, name, price, height, width, length].find(item => item === "")
                if(completedForm !== undefined) {
                    window.alert("Please complete all fields")
                    return
                }                
                const skuExists = theSkus.find(item => item == sku)
                if(skuExists) {
                    window.alert("Sku must be unique")
                    return
                }
                const postData = JSON.stringify({sku:sku, name:name, price:price,
                    attribute: "Dimension: "+height+" x "+width+" x "+length})            
                axios.post(url, postData, {
                    headers: {
                        Accept:"application/json"
                    }
                } )
                .then(response=>{
                    console.log(response.data)
                    nav('/')
                })
                .catch(error =>{console.log(error)})
            }
        }
    }

    const[formData, setFormData] = useState(initialFormData)
    const[attributes, setAttributes] = useState({Size: ""})
    const switchProduct = new ProductSwitcher(formData.productType)
    const newAttribute = new attributeSet()
    const saver = new submitter()
    const type = formData.productType.toLowerCase()

    // useEffect(()=>{},[])

    const onChange = (e) => {
        setFormData({...formData, [e.target.id]:e.target.value})
    }

    const onAttributeChange = (e) => {
        setAttributes({...attributes, [e.target.id]:e.target.value})
        if(type == "furniture"){
            console.log(attributes.hwl())
        }        
    }    
    const onTypeChange = (e) => {
        setFormData({...formData, [e.target.id]:e.target.value})
        let theType = e.target.value.toLowerCase()
        setAttributes(newAttribute[theType]())
    }


    const onCancel = () => {
        nav('/')
    } 
    return(
        <div>
        <Nav>
            <h2>Product Add</h2>
                <ButtonHolder>
                    <button onClick={()=>{saver[type](addProductsEndpoint,formData,attributes)}}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </ButtonHolder>
        </Nav>
        <ProductForm id='product_form'>
            <div>
            <label htmlFor='sku'>SKU</label>
            <input onChange={(e)=>{onChange(e)}} id='sku' type='text' value={formData.sku}/>
            </div>
            <div>
            <label htmlFor='name'>Name</label>
            <input onChange={(e)=>{onChange(e)}} id='name' type='text' value={formData.name}/>
            </div>
            <div>
            <label htmlFor='price'>Price ($)</label>
            <input onChange={(e)=>{onChange(e)}} id='price' type='number' value={formData.price}/>
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
            {switchProduct[type](onAttributeChange)}
        </ProductForm>
        </div>
    )
}