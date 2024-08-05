// import React from 'react'
import { Link } from "react-router-dom";
// import Header from './header'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Employee Category</h3>
      <ul>
        <Link to="/Employee" className="text-decoration-none">
          {/* <li id="higher" className="option" ><Link to="/higherEmployee" className="text-decoration-none"> Higher employees</Link></li> */}
          <li id="normal" className="option">
            {" "}
            Employees
          </li>
          {/* <li id="nontech" className="option" ><Link to="/nontechEmployee" className="text-decoration-none"> Non-Tech employees</Link></li> */}
        </Link>
      </ul>
      <h3>Customer Category</h3>
      <ul>
        <Link to="/customers" className="text-decoration-none">
          {/* <li id="account" className="option"><Link to="/accountholders" className="text-decoration-none">Customers</Link></li> */}
          <li id="loan" className="option">
            Customers
          </li>
          {/* <li id="saving" className="option" ><Link to="/savingAccount" className="text-decoration-none">Saving account holders</Link></li> */}
        </Link>
      </ul>
      <h3>Bank Category</h3>
      <ul>
        <Link to="/bankEvent" className="text-decoration-none">
          <li id="event" className="option">
            Bank Events{" "}
          </li>
        </Link>
        <Link to="/bankAwards" className="text-decoration-none">
          <li id="awards" className="option">
            {" "}
            Bank Awards
          </li>{" "}
        </Link>
        {/* <li id="about" className="option"><Link to="/aboutUs" className="text-decoration-none">About Us</Link></li> */}
      </ul>
      <h3>Admin Management</h3>
      <ul>
        <Link to ="/adminManagement"  className="text-decoration-none">
        <li id="admin" className="option" > 
          Admin Management
        </li>
        </Link>   
      </ul>
      <div className="homepage-btn" id="homepage-btn">
        Back To Homepage
      </div>
    </div>
  );
};

export default Sidebar;
// //  //onClick="showContent('admin')    onClick="gotoHomepage()""


