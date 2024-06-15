// // import React from 'react';
// // import './App.css';
// // import PocoMain from './PocoMain';


// // function App() {
// //   return (
// //     <div>

// //         <PocoMain/>
// //     </div>
// //   );
// // }

// // export default App;


// import './App.css';
// import Navigation from './Navigation';
// // import { Route, Link, BrowserRouter as Router, BrowserRouter, Routes } from 'react-router-dom';
// import Signup from './Signup';
// import Home from './Home';
// import Login from './Login';
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navigation/>
//       <Routes>
//         <Route path='Home' element={<Home/>}></Route>
//         {/* <Route path='Login' element={Login/>}></Route> */}
//         <Route path='Signup' element={<Signup/>}></Route>
//         {/* <Route path='/Home/MenShirts' element={<MenShirts/>}></Route> */}
//       </Routes>
//       </BrowserRouter >
//       </div >
//   );
// }

// export default App;

import './App.css';
import Navigation from './Navigation';
import { Route, Link, BrowserRouter as Router, BrowserRouter, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import X_Series from './X_Series';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Signup' element={<Signup/>}></Route>
        <Route path='/Home/X_Series' element={<X_Series/>}></Route>
      </Routes>
      </BrowserRouter >
      </div >
  );
}

export default App;
