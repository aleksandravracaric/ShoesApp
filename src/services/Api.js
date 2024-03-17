import axios from "axios";

const baseURL = 'https://shoes-collections.p.rapidapi.com';

const fetchShoes = async () => {


    const apiKey1 = '879a9ec3a7mshb698cb1339df89dp19bec7jsnead75be058fb'
    const apiKey2 = '7d647b9184msh5b3e1f1fbae0e80p1591a6jsnb869ef4a2d1c'
    try {


        const headers = {
            'X-RapidAPI-Key': '879a9ec3a7mshb698cb1339df89dp19bec7jsnead75be058fb',
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
