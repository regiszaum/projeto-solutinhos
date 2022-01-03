import axios from 'axios'

const http = axios.create({
  baseURL: 'http://projeto-jm.com.br:5000/',
  headers: {
    'Accept': 'application/json',
    'Content': 'application/json'
  }
})

export default http