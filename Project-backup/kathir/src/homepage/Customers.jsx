// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../APIURL/apiUrl";

// const Customers = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [items, setItems] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Fetch employee data on component mount
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL + "/getCustomerData");
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const changeName = () => setName(document.getElementById("name-customer").value);
//   const changeEmail = () => setEmail(document.getElementById("email-customer").value);
//   const changeAccountNumber = () => setAccountNumber(document.getElementById("accoutNumber-customer").value);
//   const changeAddress = () => setAddress(document.getElementById("address-customer").value);
//   const changeContact = () => setContact(document.getElementById("contact-customer").value);

//   const submitCustomerData = async () => {
//     const obj = {
//       userName: name,
//       userEmail: email,
//       userAddress: address,
//       userAccountNumber: accountNumber,
//       userContact: contact,
//     };

//     try {
//       if (editingId) {
//         // Update existing record
//         await axios.put(API_URL + `/updateCustomerData/${editingId}`, obj);
//       } else {
//         // Create new record
//         await axios.post(API_URL + "/submitCustomerData", obj);
//       }

//       // Clear form fields
//       setName("");
//       setEmail("");
//       setAccountNumber("");
//       setAddress("");
//       setContact("");
//       setEditingId(null);

//       // Refresh data
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(API_URL + "/getCustomerData");
//           setItems(response.data);
//         } catch (error) {
//           console.error("Error fetching data", error);
//         }
//       };
//       fetchData();

//       // Close the modal
//       const modal = document.getElementById("exampleModal");
//       const modalInstance = bootstrap.Modal.getInstance(modal);
//       modalInstance.hide();
//     } catch (error) {
//       console.error("Error submitting data", error);
//     }
//   };

//   // Filter items based on the search term
//   const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.contact.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div id="content-normal" className="content">
//         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">
//                   {editingId ? "Edit Data" : "Add Data"}
//                 </h1>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <form id="dataForm-normal" className="form-container">
//                   <label><b>Name</b></label>
//                   <input type="text" id="name-customer" value={name} onChange={() => changeName()} required />
//                   <label><b>Email</b></label>
//                   <input type="email" id="email-customer" value={email} onChange={() => changeEmail()} required />
//                   <label><b>Account Number</b></label>
//                   <input type="text" id="accoutNumber-customer" value={accountNumber} onChange={() => changeAccountNumber()} required />
//                   <label><b>Address</b></label>
//                   <input type="text" id="address-customer" value={address} onChange={() => changeAddress()} required />
//                   <label><b>Contact</b></label>
//                   <input type="text" id="contact-customer" value={contact} onChange={() => changeContact()} required />
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary" onClick={() => submitCustomerData()}>
//                   {editingId ? "Update" : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2>Customers</h2>

//         <button type="button" className="openFormBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Data</button>

//         <div className="mb-3">
//           <label><b>Search:</b></label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search employees..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div>
//           <h1>Customer's Data</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 {/* <th>S.No</th> */}
//                 <th className="TableColumn">Name</th>
//                 <th className="TableColumn">Email</th>
//                 <th className="TableColumn">Account Number</th>
//                 <th className="TableColumn">Address</th>
//                 <th className="TableColumn">Contact</th>
//                 <th className="TableColumn">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredItems.map((item, index) => (
//                 <tr key={item._id}>
//                   {/* <td>{index + 1}</td> */}
//                   <td  className="TableColumn">{item.name}</td>
//                   <td className="TableColumn">{item.email}</td>
//                   <td className="TableColumn">{item.accountNumber}</td>
//                   <td className="TableColumn">{item.address}</td>
//                   <td className="TableColumn">{item.contact}</td>
//                   <td className="TableColumn">
//                     <button className="btn btn-warning btn-sm" onClick={() => handleEdit(item._id)}>Edit</button>
//                     <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Customers;

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../APIURL/apiUrl";

const Customers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch customer data on component mount
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "/getCustomerData");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeAccountNumber = (e) => setAccountNumber(e.target.value);
  const changeAddress = (e) => setAddress(e.target.value);
  const changeContact = (e) => setContact(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required!";
    } else if (!/^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(name)) {
      newErrors.name =
        "Name should start with a capital letter and include an initial! (Example: John Doe or D John)";
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid email is required!";
    }
    if (!accountNumber  || !/^\d{12}$/.test(accountNumber)) {
      newErrors.accountNumber = "Account Number (12 digits) is required!";
    }
    if (!address) {
      newErrors.address = "Address is required!";
    }
    if (!contact || !/^\d{10}$/.test(contact)) {
      newErrors.contact = "Valid contact number (10 digits) is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitCustomerData = async () => {
    if (!validateForm()) return;

    const obj = {
      userName: name,
      userEmail: email,
      userAddress: address,
      userAccountNumber: accountNumber,
      userContact: contact,
    };

    try {
      if (editingId) {
        // Update existing record
        await axios.put(API_URL + `/updateCustomerData/${editingId}`, obj);
      } else {
        // Create new record
        await axios.post(API_URL + "/submitCustomerData", obj);
      }

      // Clear form fields
      setName("");
      setEmail("");
      setAccountNumber("");
      setAddress("");
      setContact("");
      setEditingId(null);

      // Refresh data
      const fetchData = async () => {
        try {
          const response = await axios.get(API_URL + "/getCustomerData");
          setItems(response.data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      fetchData();

      // Close the modal
      const modal = document.getElementById("exampleModal");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  // Filter items based on the search term
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.accountNumber.searchTerm ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  {editingId ? "Edit Data" : "Add Data"}
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
                  <label>
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    id="name-customer"
                    value={name}
                    onChange={changeName}
                    required
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}

                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    id="email-customer"
                    value={email}
                    onChange={changeEmail}
                    required
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}

                  <label>
                    <b>Account Number</b>
                  </label>
                  <input
                    type="text"
                    id="accoutNumber-customer"
                    value={accountNumber}
                    onChange={changeAccountNumber}
                    required
                  />
                  {errors.accountNumber && (
                    <div className="text-danger">{errors.accountNumber}</div>
                  )}

                  <label>
                    <b>Address</b>
                  </label>
                  <input
                    type="text"
                    id="address-customer"
                    value={address}
                    onChange={changeAddress}
                    required
                  />
                  {errors.address && (
                    <div className="text-danger">{errors.address}</div>
                  )}

                  <label>
                    <b>Contact</b>
                  </label>
                  <input
                    type="text"
                    id="contact-customer"
                    value={contact}
                    onChange={changeContact}
                    required
                  />
                  {errors.contact && (
                    <div className="text-danger">{errors.contact}</div>
                  )}
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
                  onClick={submitCustomerData}
                >
                  {editingId ? "Update" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2>Customers</h2>

        <button
          type="button"
          className="openFormBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Data
        </button>

        <div className="mb-3">
          <label>
            <b>Search:</b>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <h1>Customer's Data</h1>
          <table className="table">
            <thead>
              <tr>
                <th className="TableColumn">Name</th>
                <th className="TableColumn">Email</th>
                <th className="TableColumn">Account Number</th>
                <th className="TableColumn">Address</th>
                <th className="TableColumn">Contact</th>
                <th className="TableColumn">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={item._id}>
                  <td className="TableColumn">{item.name}</td>
                  <td className="TableColumn">{item.email}</td>
                  <td className="TableColumn">{item.accountNumber}</td>
                  <td className="TableColumn">{item.address}</td>
                  <td className="TableColumn">{item.contact}</td>
                  <td className="TableColumn">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEdit(item._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customers;
