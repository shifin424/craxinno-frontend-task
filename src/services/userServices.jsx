import axios from '../axios/axios';

export const createAccount = (data) =>{
   return axios.post("/create-account", data);
}