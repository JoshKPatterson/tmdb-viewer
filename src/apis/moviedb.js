import axios from 'axios';

const KEY = '3ef8736602e3112b4a20260c7ba9098b'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
    include_adult: false,
    language: 'en'
  }
})