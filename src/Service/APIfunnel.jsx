import axios from 'axios';

export async function suscrbirUsuario(props) {
try {
<<<<<<< HEAD
    const response = await axios.post('http://localhost:8080/funnel', props);
=======
    const response = await axios.post('https://restapinode-production-8fd5.up.railway.app/funnelSub', props);
>>>>>>> main

    
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error en la respuesta del servidor');  
    }
    } catch (error) {
    
    console.error('Error en la solicitud:', error);
    throw error;
    }
}