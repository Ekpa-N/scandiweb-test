import styled from 'styled-components'


export const MainBody = styled.div`
    width: 850px;
    min-height: 400px;
    border: 1px solid black;

`

export const MainContainer = styled.div`
    width: 900px;
    margin: auto;
`

export const ProductsContainer = styled.div`
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;

    div{
        margin: 15px 15px;
    }
`

export const ProductBox = styled.div`
    width: 150px;
    height: 160px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    justify-content: center;

    h5{
        display: flex;
        justify-content: center;
        width: 60%;
        margin-bottom: 0;
        margin-top: 10px;
        border: 1px solid black;
        font-size: 11px;        
    }

    input{
        margin-left: -75px;
    }


`

export const ButtonHolder = styled.div`
    justify-content: space-between;
    border: 1px solid black;
    display: flex;
    height: 50%;
    width: 180px;
    
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    width: 750px;
    align-items: baseline;
`

export const Footer = styled.footer`
    display: flex;
    height: 50px;
    width: 850px;
    justify-content: center;
    margin-top: 1px;
    border: 1px solid black;
    align-items: center;
`

export const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid black;
    height: 400px;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        input {
            width: 65%;
        }
    }
`