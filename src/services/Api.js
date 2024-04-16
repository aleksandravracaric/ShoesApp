import axios from "axios";


const baseURL = 'https://shoes-collections.p.rapidapi.com';

const apiKey1 = '879a9ec3a7mshb698cb1339df89dp19bec7jsnead75be058fb';
const apiKey4 = 'f37705161cmshda36fceb04ba519p184d39jsncdf7b613d75c';

export function fetchAllShoes() {

    const headers = {
        'X-RapidAPI-Key': 'f37705161cmshda36fceb04ba519p184d39jsncdf7b613d75c',
        'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'

    };
    return axios.get(`${baseURL}/shoes`, { headers: headers })
}
