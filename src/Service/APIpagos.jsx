async function getDolarAmbito(){
    try {
        
        const response = await fetch('http://localhost:8080/payment/dolar', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
    
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
    
        const data = await response.json();
        // alert(JSON.stringify(data.data))
        console.log(data.price)
        sessionStorage.setItem('dolar', JSON.stringify(data.price));
        
        // Puedes realizar acciones adicionales con los datos de respuesta si es necesario.
    
        return data.data;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Puedes manejar el error de otra manera si es necesario.
      } 
}


export {getDolarAmbito} 