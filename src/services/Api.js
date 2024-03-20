import axios from "axios";

const baseURL = 'https://shoes-collections.p.rapidapi.com';

const fetchShoes = async () => {


    const apiKey1 = '879a9ec3a7mshb698cb1339df89dp19bec7jsnead75be058fb'
    const apiKey2 = '7d647b9184msh5b3e1f1fbae0e80p1591a6jsnb869ef4a2d1c'
    const apiKey3 = '1cb2eab011msh7333949d3840809p193314jsn8e3480b7300c'
    try {


        const headers = {
            'X-RapidAPI-Key': '1cb2eab011msh7333949d3840809p193314jsn8e3480b7300c',
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
