
import axios from 'axios';

export const marvel = axios.create({
    baseURL: "https://mcuapi.herokuapp.com/api/v1/movies"
})
