
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://fly.io/apps/solitary-river-9928/monitoring'
})
