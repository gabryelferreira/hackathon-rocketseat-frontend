import axios from "axios";

const api = axios.create({
    baseURL: "http://hackaclass-env.dbeq8xbnmy.us-east-2.elasticbeanstalk.com/api/"
});

api.interceptors.response.use(response => {
    return response.data;
}, (e) => {
    return Promise.reject(e);
})
  
export default api;