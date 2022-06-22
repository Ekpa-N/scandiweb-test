import styled from 'styled-components'


export const MainBody = styled.div`
    width: 850px;
    min-height: 550px;
    font-family: Trebuchet MS, sans-serif;
    color: #40393E;

`

export const MainContainer = styled.div`
    width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductsContainer = styled.div`
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;

    div{
        margin: 15px 15px;
    }

    section {
        width: 250px;
        height: 50px;
        margin: auto;
        display: flex;
        justify-content: center;
        font-family: Trebuchet MS, sans-serif;
        font-weight: bold;
        
    }
`

export const ProductBox = styled.div`
    width: 150px;
    height: 160px;
    display: flex;
    flex-direction: column;
    font-family: Trebuchet MS, sans-serif;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #C47482;
    color: #40393E;

    :hover {
        height: 156px;
        width: 146px;
        border: 2px solid #26474E;
    }

    h5{
        display: flex;
        justify-content: center;
        width: 70%;
        margin-bottom: 0;
        margin-top: 10px;
        border: 1px solid #DEC4D6;
        font-size: 11px;        
    }
    
    input{
        margin-left: -75px;
    }
    
    
`

export const ButtonHolder = styled.div`
    justify-content: space-between;
    display: flex;
    height: 30px;
    width: 180px;

    button{
        border: none;
        background-color: #E5B3BB;
        border-radius: 5px;
        color: white;

        :hover {
            background-color: #218B82;
        }
    }
    
    `

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #40393E;
    width: 100%;
    align-items: baseline;
    `

export const Footer = styled.footer`
    display: flex;
    height: 50px;
    width: 850px;
    justify-content: center;
    margin-top: 1px;
    border: 1px solid #40393E;
    align-items: center;
    `

export const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    font-family: Trebuchet MS, sans-serif;
    font-weight: bold;
    margin: auto;
    height: 300px;
    justify-content: center;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 1px;

        input {
            width: 65%;
            border: 1px solid #26474E;
            outline: none;
            
            :focus {
                border: 2px solid #26474E;                
            }
        }
        
        select {
            border: 1px solid #26474E;
            outline: none;

            :focus {
                border: 2px solid #26474E;                
            }
        }
    }
`