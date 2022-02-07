// import React from 'react';
// import { Route, Outlet } from "react-router-dom";
// import { auth } from "../firebase.js";
// import { onAuthStateChanged, getAuth } from "firebase/auth";
// import Dashboard from '../pages/Dashboard.js';

// const StudentRoutes = () => {
//     // const user = getAuth().currentUser;
//     // const user = auth.currentUser;
//     // onAuthStateChanged(auth, async (user) => {
//     // console.log(user);
//     // if (user) {
//     // console.log(user);
//     // const role = await user.getIdTokenResult().then(idTokenResult => idTokenResult.claims.roles[0]);
//     // console.log(role)
//     // console.log("sddfs")
//     // if (role === 'student') {
//     return (
//         <Route >
//             <Route exact path="/student/dashboard" element={<Dashboard name='Student' />} />
//             <Route exact path="/student/profile" element={<Dashboard name='Profile' />} />
//         </Route>
//     );
//     // }
//     // }
//     // return <Outlet />;
//     // });
// }
// export default StudentRoutes;