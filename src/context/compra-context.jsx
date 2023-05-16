import React, {useState, useEffect, useMemo} from 'react';
import useProducto from '../Service/APIproducto';

const CompraContext = React.createContext();

export function CompraProvider(props){
    const [isLoading, setIsLoading] = useState(false);
    const [orderData, setOrderData] = useState({ quantity: "1", price: "0", amount: 0, description: "Terreno",cards: 0, storage:1, guarderia:0, sum:0, user: {},sku:0 });
    const [cargaron, setCargaronProductos]= useState(false);
    const [producto, setProducto]= useState(null)
    const productos = useProducto(); 
    
    
    useEffect(()=>{
        async function cargarProductos(){
            if(!cargaron){
                
                
            

            try{
                const producto = await productos();
                setProducto(producto);
                console.log("compra-context");
                console.log(producto);
                setCargaronProductos(true);
            }catch (error){
                console.log(error);
            }
            return
            }else{
                setCargaronProductos(true);
            }
        }
    cargarProductos(); 
    }, []);

    const value = React.useMemo(()=>{
        alert("cambio")
        console.log(orderData)
        return({
            producto,
            cargaron,
            orderData,
            setOrderData
        })
    },[producto, cargaron, orderData]);

    return <CompraContext.Provider value={value} {...props}/>
}

export function useCompra() {
    const context = React.useContext(CompraContext)
    if (!context){
        throw new Error('useCompra must be used within a CompraProvider')
    }
    return context;
}