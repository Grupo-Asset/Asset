import { useEffect, useState } from 'react';

import axios from 'axios';


export function useDolar() {
    const [contizacion, setCotizacion]= useState(null)
    useEffect(() => {
        const fetchCotizaciones = async () => {
            try {
                const response = await axios.get('http://localhost:8080/v1/getDolar');

                const data = await response;

                setCotizacion(await data.data.price);
                // alert(JSON.stringify(data.data.price));
            }catch (error){
                console.error('There was a problem with the fetch operation:', error);

            }
        };
        fetchCotizaciones();
    }, []);

    return contizacion;
    
}