import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mockdata-d8d19.firebaseio.com/'
})

export default instance;