import axios from "axios";

const baseURL = 'https://shoes-collections.p.rapidapi.com';

const fetchShoes = async () => {


    try {


        const headers = {
            'X-RapidAPI-Key': '7d647b9184msh5b3e1f1fbae0e80p1591a6jsnb869ef4a2d1c',
            'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'

        };

        const response = await axios.get(`${baseURL}/shoes`, { headers: headers });

        console.log('Server Response:', response);
        return response.data;
    } catch (error) {
        console.error('Error', error);
    }
};
export{baseURL, fetchShoes}
