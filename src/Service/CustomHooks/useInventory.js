import {useState, useEffect} from "react"

export function useProducts(proyectId){
    const [products , setProducts]  = useState(null);
    const [loading  , setLoading]   = useState(true);
    const [error    , setError  ]   = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/inventory/products?proyectId=${proyectId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },  
        
      })
      .then((res) => res.json())
      .then((data)=> setProducts(data.data))
      .catch((error) => setError(error))
      .finally(()=> setLoading(false))
      

    },[]);
    return {products,loading, error}
}