import axios from "axios"
// import { getAuth } from "firebase"
const instance = axios.create({
    baseURL: "https://acharya-placement-dev.herokuapp.com/api"
})




// const instance = axios.create({
//     baseURL: 'https://acharya-placement-dev.herokuapp.com/api',
//     // timeout: 1000,
//     // headers: {'Authorization': "Bearer " + token}
// });


// axios.interceptors.request.use(
//     config => {
//         const a = getAuth();
//         console.log(a);
//         console.log("Interceptor Intercepting Request")
//         if (a.currentUser) {
//             console.log("===========")//
//             const token = a.currentUser.getIdToken();
//             if (token) {
//                 config.headers["Authorization"] = "Bearer " + token;
//             }
//         }
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// );

export default instance;