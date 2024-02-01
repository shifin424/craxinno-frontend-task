import axios from '../axios/axios';

export const createAccountApi = (data) =>{
   return axios.post("/create-account", data);
}

export const saveAllInfoApi = (data) => {
   console.log(data,"in service file")
   return axios.post('/save-all-info',data)
}