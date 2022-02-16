import axios from 'axios';
import {toast} from 'react-toastify';

//configuring default headers


axios.interceptors.response.use(null, error =>{
    const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    if(!expectedError){
        console.log("Logging the error ",error);
        //MARK: add db loggging service, can use firebase crash analytics
        //Need to set up logging service to send notification etc
        toast.error("An unexpected error occurred.");
    }

    return Promise.reject(error);
});

function setJwt(jwt){
    //get the users token from local storage
    axios.defaults.headers.common['x-auth-token'] = jwt;
}

//to handle http requests no matter the library from a central location
export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
}