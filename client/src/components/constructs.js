import React from 'react';
import ProductHolder from './ProductHolder.jsx'

export class ProductSwitcher {
    constructor(type) {
        this.type = type;
    }

    dvd(onChange) {
        return <div>
            <label>Size(mb)</label>
            <input placeholder='Please, provide size' onChange={onChange} id='size' type="number" required />
        </div>
    }

    furniture(onChange) {
        return <> <div>
        <label>Height(CM)</label>
        <input placeholder='Please, provide height' onChange={onChange} id='height' type="number" required />
    </div>
    <div>
        <label>Width(CM)</label>
        <input placeholder='Please, provide width' onChange={onChange} id='width' type="number" required />
    </div>
    <div>
        <label>Length(CM)</label>
        <input placeholder='Please, provide length' onChange={onChange} id='length' type="number" required />
    </div> </>
    }

    
    book(onChange) {
        return <div>
        <label>Weight(KG)</label>
        <input placeholder='Please, provide weight' onChange={onChange} id='weight' type="number" required />
        </div>
    }
}


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

