import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://projeto-pub.herokuapp.com/',
});

export default Api;	
