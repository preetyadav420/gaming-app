import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  params:{
    key: '8d71ebd42bb44a0fb3b2ff056026f392'
  }
});