

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
  
  async function registerUser(email, password) {
    // Implementa la lógica para registrar un nuevo usuario.
  }
  
  async function updateUserProfile(userId, newData) {
    // Implementa la lógica para actualizar el perfil del usuario.
  }
  
  export { login, registerUser, updateUserProfile };
  