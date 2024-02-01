import axios from '../axios/axios';

export const createAccount = (data) =>{
   console.log("in service file",data)
   return axios.post("/create-account", data);
}