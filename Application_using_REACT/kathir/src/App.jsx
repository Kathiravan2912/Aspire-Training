import "./App.css";
import NormalEmployee from "./homepage/normalEmployee";
import Customers from "./homepage/Customers";
import BankEvent from "./homepage/BankEvent";
import BankAwards from "./homepage/BankAwards";
// import Aboutus from "./homepage/Aboutus";
import Login from "./components/Login";
import AdminManagement from "./homepage/AdminManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/sidebar";
// import Header from "./layout/header";
// import LandingPage from "./adminpanel/LandingPage";

const Auth = localStorage.getItem('isAuth');
function  App() {
  return (
    // <LandingPage />
    <>
    <Router>

      {!Auth? 

       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<AdminManagement />} />
      </Routes>

      : 

      <>

    <div className="topic">Bank of Merits - Data Management</div>
        
        <div className="body">
          <div className="container">
            {/* <div><Header/></div> */}
            <Sidebar/>
            <div className="main-content">
              
                <Routes>
                  <Route element={<NormalEmployee />} path="/" />
                  <Route element={<NormalEmployee />} path="/Employee" />
                  <Route element={<Customers />} path="/customers" />
                  <Route element={<BankEvent />} path="/bankEvent" />
                  <Route element={<BankAwards />} path="/bankAwards" />
                  <Route element={<AdminManagement />} path="/adminManagement" />
                </Routes>
            
            </div>

          </div>
        </div>
      
      
      </>

      
      }

      



      
    </Router>
     
    </>
  );
}

export default App;
