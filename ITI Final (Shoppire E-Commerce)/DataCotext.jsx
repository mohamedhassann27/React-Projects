import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const DataCotext= createContext({
    products: [],
    setProducts: ()=>{},
    setReload: ()=>{},
    cart: 0,
    setCart: ()=>{}
})

function DataProvider(props) {
    const [products, setProducts]= useState([])
    const [reload, setReload]= useState(false)
    const [cart,setCart]= useState(0)

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let {data}= await axios.get("https://68cd48bfda4697a7f3056db2.mockapi.io/api/shoppire/products")
                setProducts(data)
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
        // console.log(products);
    },[reload])
    
    return (
        <DataCotext.Provider value={{products,setProducts,setReload,cart,setCart}}>
            {props.children}
        </DataCotext.Provider>
    )
}

export default DataProvider
