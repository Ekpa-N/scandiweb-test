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

// const onChange = (e) => {
//     setFormData({...formData, [e.target.id]:e.target.value})
// }

this.onChange = function (event, form, stateManager) {
    stateManager({...form, [event.target.id]:event.target.value})    
}
// const onAttributeChange = (e) => {
//     setAttributes({...attributes, [e.target.id]:e.target.value})       
// }    
// const onTypeChange = (e) => {
//     setFormData({...formData, [e.target.id]:e.target.value})
//     let theType = e.target.value.toLowerCase()
//     setAttributes(newAttribute[theType]())
// }


// class submitter {
//     constructor() {
//         this.book = function (url, formData, attribute) {
//             const{sku, name, price} = formData
//             const {weight} = attribute 
//             let completedForm = [sku, name, price, weight].find(item => item === "")
//             if(completedForm !== undefined) {
//                 window.alert("Please submit required data")
//                 return
//             }     
//             const skuExists = theSkus.find(item => item == sku)
//             if(skuExists) {
//                 window.alert("Sku must be unique")
//                 return
//             }           
//             const postData = JSON.stringify({sku:sku, name:name, price:price,
//                 attribute: `Weight: ${weight} kg`})            
//             axios.post(url, postData, {
//                 headers: {
//                     Accept:"application/json"
//                 }
//             } )
//             .then(response=>{
//                 console.log(response.data)
//                 nav('/')
//             })
//             .catch(error =>{console.log(error)})
//         }

//         this.dvd = function (url, formData, attribute) {
//             const{sku, name, price} = formData
//             const {size} = attribute 
//             let completedForm = [sku, name, price, size].find(item => item === "")
//             if(completedForm !== undefined) {
//                 window.alert("Please complete all fields")
//                 return
//             }     
//             const skuExists = theSkus.find(item => item == sku)
//             if(skuExists) {
//                 window.alert("Sku must be unique")
//                 return
//             }   
//             const postData = JSON.stringify({sku:sku, name:name+" DISC", price:price,
//                 attribute: "Size: "+size+" MB"})            
//             axios.post(url, postData, {
//                 headers: {
//                     Accept:"application/json"
//                 }
//             } )
//             .then(response=>{
//                 console.log(response.data)
//                 nav('/')
//             })
//             .catch(error =>{console.log(error)})
//         }

//         this.furniture = function (url, formData, attribute) {
//             const{sku, name, price} = formData
//             const {height, width, length} = attribute                 
//             let completedForm = [sku, name, price, height, width, length].find(item => item === "")
//             if(completedForm !== undefined) {
//                 window.alert("Please complete all fields")
//                 return
//             }                
//             const skuExists = theSkus.find(item => item == sku)
//             if(skuExists) {
//                 window.alert("Sku must be unique")
//                 return
//             }
//             const postData = JSON.stringify({sku:sku, name:name, price:price,
//                 attribute: "Dimension: "+height+" x "+width+" x "+length})            
//             axios.post(url, postData, {
//                 headers: {
//                     Accept:"application/json"
//                 }
//             } )
//             .then(response=>{
//                 console.log(response.data)
//                 nav('/')
//             })
//             .catch(error =>{console.log(error)})
//         }
//     }
// }