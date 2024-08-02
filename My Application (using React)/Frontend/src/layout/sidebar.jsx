// import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
            <h3>Employee Category</h3>
            <ul>
                <li id="higher" className="option" ><Link to="/higherEmployee" className="text-decoration-none"> Higher employees</Link></li>
                <li id="normal" className="option" ><Link to="/normalEmployee" className="text-decoration-none"> Normal employees</Link></li>
                <li id="nontech" className="option" ><Link to="/nontechEmployee" className="text-decoration-none"> Non-Tech employees</Link></li>
            </ul>
            <h3>Customer Category</h3>
            <ul>
                <li id="account" className="option"><Link to="/accountholders" className="text-decoration-none"> Account Holders</Link></li>
                <li id="loan" className="option"><Link to="/loanPurchased" className="text-decoration-none">Loan Purchased customers</Link></li>
                <li id="saving" className="option" ><Link to="/savingAccount" className="text-decoration-none">Saving account holders</Link></li>
            </ul>
            <h3>Bank Category</h3>
            <ul>
                <li id="event" className="option"><Link to="/bankEvent" className="text-decoration-none"> Bank Events </Link></li>
                <li id="awards" className="option"><Link to="/bankAwards" className="text-decoration-none"> Bank Awards </Link></li>
                <li id="about" className="option"><Link to="/aboutUs" className="text-decoration-none">About Us</Link></li>
            </ul>
            <h3>Admin Management</h3>
            <ul>
                <li id="admin" className="option" onclick="showContent('admin')">Admin Management</li>
            </ul>
            <div className="homepage-btn" id="homepage-btn" onclick="gotoHomepage()">Back To Homepage</div>
        </div>
  )
}

export default Sidebar;