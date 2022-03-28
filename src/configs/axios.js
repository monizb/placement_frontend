import axios from "axios"
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider";

const instance = axios.create({
    baseURL: "https://acharya-placement-dev.herokuapp.com/api"
})

// const Axiiios = () => {
//     const { currentUser } = useContext(AuthContext);

//     if (currentUser) {
//         console.log("ffff")
//         currentUser.getIdToken(true).then(idToken => {
//             instance.interceptors.request.use(
//                 config => {
//                     config.headers['Authorization'] = 'Bearer ' + idToken;
//                     return config;
//                 },
//                 error => {
//                     return Promise.reject(error);
//                 }
//             );
//         });
//     };
// };


// Axiiios();


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