import React from 'react';
import ProductHolder from './ProductHolder.jsx'
import axios from 'axios';




export class ProductDisplay {
    constructor(list, onCheck) {
        this.list = list
        this.onCheck = onCheck
    }

    display() {
     return this.list.map((item, index)=>{
            return <ProductHolder 
            key={index} 
            id={item.id}
            name={item.name}cd clien
            attribute={item.attribute}
            price={item.price}
            sku={item.sku}
            onCheck={this.onCheck}
            ></ProductHolder>
        })                
    }
}


export class Submitter {
    constructor(theUrl, theForm, theAttribute, skus, navigate) {
        this.url = theUrl
        this.form = theForm
        this.attribute = theAttribute
        this.theSkus = skus
        this.nav = navigate
    }

    onChange(event, item, stateManager) {
        stateManager({...item, [event.target.id]:event.target.value})    
    }

     onCancel (){
            this.nav('/')
        } 

        book() {
            const{sku, name, price} = this.form
            const {weight} = this.attribute 
            let completedForm = [sku, name, price, weight].find(item => item === "")
            if(completedForm !== undefined) {
                window.alert("Please submit required data")
                return
            }     
            const skuExists = this.theSkus.find(item => item == sku)
            if(skuExists) {
                window.alert("Sku must be unique")
                return
            }           
            const postData = JSON.stringify({sku:sku, name:name, price:price,
                attribute: `Weight: ${weight} kg`})            
            axios.post(this.url, postData, {
                headers: {
                    Accept:"application/json"
                }
            } )
            .then(response=>{
                console.log(response.data)
                this.nav('/')
            })
            .catch(error =>{console.log(error)})
        }

        dvd() {
            const{sku, name, price} = this.form
            const {size} = this.attribute 
            let completedForm = [sku, name, price, size].find(item => item === "")
            if(completedForm !== undefined) {
                window.alert("Please complete all fields")
                return
            }     
            const skuExists = this.theSkus.find(item => item == sku)
            if(skuExists) {
                window.alert("Sku must be unique")
                return
            }   
            const postData = JSON.stringify({sku:sku, name:name+" DISC", price:price,
                attribute: "Size: "+size+" MB"})            
            axios.post(this.url, postData, {
                headers: {
                    Accept:"application/json"
                }
            } )
            .then(response=>{
                console.log(response.data)
                this.nav('/')
            })
            .catch(error =>{console.log(error)})
        }

        furniture() {
            const{sku, name, price} = this.form
            const {height, width, length} = this.attribute                 
            let completedForm = [sku, name, price, height, width, length].find(item => item === "")
            if(completedForm !== undefined) {
                window.alert("Please complete all fields")
                return
            }                
            const skuExists = this.theSkus.find(item => item == sku)
            if(skuExists) {
                window.alert("Sku must be unique")
                return
            }
            const postData = JSON.stringify({sku:sku, name:name, price:price,
                attribute: "Dimension: "+height+" x "+width+" x "+length})            
            axios.post(this.url, postData, {
                headers: {
                    Accept:"application/json"
                }
            } )
            .then(response=>{
                console.log(response.data)
                this.nav('/')
            })
            .catch(error =>{console.log(error)})
        }
}



export class ProductDVD extends Submitter {
    constructor(theUrl, theForm, theAttribute, skus, navigate, item, stateHandler) {
        super(theUrl, theForm, theAttribute, skus, navigate)
        this.item = item
        this.stateHandler = stateHandler
    }

    DVD() {
        return <div>
        <label>Size(mb)</label>
        <input placeholder='Please, provide size' onChange={(e)=>{this.onChange(e, this.item, this.stateHandler)}} id='size' type="number" required />
    </div>
    } 
}

export class ProductBook extends Submitter {
    constructor(theUrl, theForm, theAttribute, skus, navigate, item, stateHandler) {
        super(theUrl, theForm, theAttribute, skus, navigate)
        this.item = item
        this.stateHandler = stateHandler
    }

    Book() {
        return <div>
        <label>Weight(KG)</label>
        <input placeholder='Please, provide weight' onChange={(e)=>{this.onChange(e, this.item, this.stateHandler)}} id='weight' type="number" required />
        </div>
    } 
}
export class ProductFurniture extends Submitter {
    constructor(theUrl, theForm, theAttribute, skus, navigate, item, stateHandler) {
        super(theUrl, theForm, theAttribute, skus, navigate)
        this.item = item
        this.stateHandler = stateHandler
    }

    Furniture() {
        return <> <div>
        <label>Height(CM)</label>
        <input placeholder='Please, provide height' onChange={(e)=>{this.onChange(e, this.item, this.stateHandler)}} id='height' type="number" required />
    </div>
    <div>
        <label>Width(CM)</label>
        <input placeholder='Please, provide width' onChange={(e)=>{this.onChange(e, this.item, this.stateHandler)}} id='width' type="number" required />
    </div>
    <div>
        <label>Length(CM)</label>
        <input placeholder='Please, provide length' onChange={(e)=>{this.onChange(e, this.item, this.stateHandler)}} id='length' type="number" required />
    </div> </>
    } 
}

