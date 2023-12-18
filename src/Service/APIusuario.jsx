

async function login(email, password) {
    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
  
      const data = await response.json();
      sessionStorage.setItem("user", JSON.stringify(data));
      window.location.reload();
      // Puedes realizar acciones adicionales con los datos de respuesta si es necesario.
  
      return data;
    } catch (error) {
      console.error('There was a problem with the login operation:', error);
      throw error; // Puedes manejar el error de otra manera si es necesario.
    }
  }
  
  async function register(userDTO) {
    try {
      const response = await fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      });
  
      console.log('Request sent:', userDTO);
  
      if (!response.ok) {
        const responseBody = await response.text().catch(() => null);
        const errorMessage = responseBody ? responseBody : 'No hay información adicional disponible';
        console.log(responseBody);
        throw new Error(`Network response was not ok (${response.status}). Response: ${errorMessage}`);
      }
  
      const data = await response;
      console.log('Registro exitoso');
      console.log('Response data:', data);
  
      return data;
    } catch (error) {
      // console.error('Hubo un problema con la operación de registro:', error.message);
      throw error;
    }
  }
  
  
  async function updateUser(usuario) {
    try {
      const response = await fetch(`http://localhost:8080/user/${usuario.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      console.log('Request sent:', {usuario});
  
      if (!response.ok) {
        const responseBody = await response.text().catch(() => null);
        const errorMessage = responseBody ? responseBody : 'No hay información adicional disponible';
        console.log(responseBody);
        throw new Error(`Network response was not ok (${response.status}). Response: ${errorMessage}`);
      }
  
      const data = await response.json();
      console.log('Usuario actualizado exitosamente');
      console.log('Response data:', data);
      sessionStorage.setItem("user", JSON.stringify(usuario));
      // alert()
      window.location.reload();
  
      return response.status;
    } catch (error) {
      console.error('Hubo un problema con la operación de edición de usuario:', error.message);
      throw error;
    }
  }
  
  export { login, register, updateUser };
  