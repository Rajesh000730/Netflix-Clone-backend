import axios from "axios";
require('dotenv').config()
const instance1 = axios.create({
    baseURL:process.env.API_URL_1,
})

const instance2 = axios.create({
    baseURL:process.env.API_URL_MOVIE
})

export {instance1, instance2}