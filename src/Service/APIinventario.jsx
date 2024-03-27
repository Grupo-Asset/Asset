

async function getProductos() {
    try {
        
      const response = await fetch('http://localhost:8080/inventory/products', {
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
      sessionStorage.setItem('productos', JSON.stringify(data.data));

      // Puedes realizar acciones adicionales con los datos de respuesta si es necesario.
      return data.data;
    } catch (error) {
      console.error('There was a problem with the login operation:', error);
      throw error; // Puedes manejar el error de otra manera si es necesario.
    }
  }

  async function getServicios() {
    try {
        const response = await fetch('http://localhost:8080/inventory/services', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
    
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
    
        const data = await response.json();
        sessionStorage.setItem('servicios', JSON.stringify(data.data));

  
        // Puedes realizar acciones adicionales con los datos de respuesta si es necesario.
    
        return data.data;
      } catch (error) {
        console.error('There was a problem with the login operation:', error);
        throw error; // Puedes manejar el error de otra manera si es necesario.
      }
    }
  
  
 
  
  export { getProductos, getServicios };
  