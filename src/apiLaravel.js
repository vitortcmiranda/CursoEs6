import axios from 'axios';

const apiLaravel = axios.create({
    baseURL:'localhost:8000/api/v1/products/'
})

export default apiLaravel;