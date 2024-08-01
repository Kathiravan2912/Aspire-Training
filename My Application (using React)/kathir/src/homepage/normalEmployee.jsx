// import React from 'react'

import { useEffect, useState } from "react";
import { API_URL } from "../APIURL/apiUrl";
import axios from "axios";

const NormalEmployee = () => {
  const [name, setName] = useState(""); // kathir
  const [email, setEmail] = useState(""); // ath@ferd.com
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [items, setItems] = useState([]); //Fetch

  const changeName = () => {
    const currentName = document.getElementById("name-normal").value;
    setName(() => currentName);
  };
  const changeEmail = () => {
    const currentName = document.getElementById("email-normal").value;
    setEmail(() => currentName);
  };
  const changePosition = () => {
    const currentName = document.getElementById("position-normal").value;
    setPosition(() => currentName);
  };
  const changeSalary = () => {
    const currentName = document.getElementById("salary-normal").value;
    setSalary(() => currentName);
  };
  const changeAddress = () => {
    const currentName = document.getElementById("address-normal").value;
    setAddress(() => currentName);
  };
  const changeContact = () => {
    const currentName = document.getElementById("contact-normal").value;
    setContact(() => currentName);
  };

  const submitNormalEmpData = async () => {
    const obj = {
      userName: name,
      userEmail: email,
      userAddress: address,
      userPosition: position,
      userSalary: salary,
      userContact: contact,
    };

    // const formData = new FormData();
    // formData.append('userName',name);
    // formData.append('userEmail',email);

    console.log(obj);

    const response = await axios.post(API_URL + "/submitNormalEmpData", obj);

    console.log(response.data.message);

    //fetch data
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/NormalEmployee_Data");
          setItems(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
  };

  return (
    <>
      <div id="content-normal" className="content">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Data{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="dataForm-normal" className="form-container">
                  <input type="hidden" id="userId-normal" />
                  <label>
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    id="name-normal"
                    value={name}
                    onChange={() => changeName()}
                    required
                  />
                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    id="email-normal"
                    value={email}
                    onChange={() => changeEmail()}
                    required
                  />
                  <label>
                    <b>Position</b>
                  </label>
                  <input
                    type="text"
                    id="position-normal"
                    value={position}
                    onChange={() => changePosition()}
                    required
                  />
                  <label>
                    <b>Salary</b>
                  </label>
                  <input
                    type="number"
                    id="salary-normal"
                    value={salary}
                    onChange={() => changeSalary()}
                    required
                  />
                  <label>
                    <b>Address</b>
                  </label>
                  <input
                    type="address"
                    id="address-normal"
                    value={address}
                    onChange={() => changeAddress()}
                    required
                  />
                  <label>
                    <b>Contact</b>
                  </label>
                  <input
                    type="text"
                    id="contact-normal"
                    value={contact}
                    onChange={() => changeContact()}
                    required
                  />
                  {/* <button type="submit" className="btn">Save</button>
                  <button type="button" className="btn cancel" >Close</button> */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => submitNormalEmpData()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2>Normal Employees</h2>

        <button
          type="button"
          className="openFormBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Data
        </button>
        {/* fetch */}
        <div>
          <h1>Items</h1>
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.position}</p>
                <p>{item.salary}</p>
                <p>{item.address}</p>
                <p>{item.contact}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* //fetch */}

        <div id="formPopup-higher" className="form-popup"></div>
        <table id="dataTable-higher">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default NormalEmployee;
