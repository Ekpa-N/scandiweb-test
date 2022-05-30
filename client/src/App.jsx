import React,{ useState, useEffect } from "react";
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductList from "./components/ProductList.jsx";
import ProductAdd from "./components/ProductAdd.jsx";
import { Footer, MainContainer } from "./styles.jsx";
import { getProductsEndpoint } from "./endpoints.js";

export default function App() {        
    const nav = useNavigate()
    const[data, setData] = useState([])
    const[theSkus, setTheSkus] = useState([])

    useEffect(()=>{
        axios.get(getProductsEndpoint)
        .then(result => {
            if(result.data.data === undefined) {
                setData({message: result.data.message})
                return
            }
            setData(result.data.data)
            const allSkus = result.data.data.map(item => item.sku)
            setTheSkus(allSkus)
        })
        .catch(error => {console.log(error)})
    },[data])    

    const addPage = () => {
        nav('/add-product')
    }
    

        return(
            <MainContainer>
                <Routes path="/">
                    <Route index element={
                    <ProductList 
                    addPage={addPage}
                    data={data}
                    theSkus={theSkus}
                    />}></Route>
                    <Route path="/add-product" element={
                    <ProductAdd
                    theSkus={theSkus}
                    />}>
                </Route>
                </Routes>
                <Footer>Scandiweb Test Assignment</Footer>
            </MainContainer>             
        )
    
}