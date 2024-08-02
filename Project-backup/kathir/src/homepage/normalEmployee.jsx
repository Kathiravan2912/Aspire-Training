// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../APIURL/apiUrl";

// const NormalEmployee = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [position, setPosition] = useState("");
//   const [salary, setSalary] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Fetch employee data on component mount
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL + "/getNormalEmpData");
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const changeName = () => setName(document.getElementById("name-normal").value);
//   const changeEmail = () => setEmail(document.getElementById("email-normal").value);
//   const changePosition = () => setPosition(document.getElementById("position-normal").value);
//   const changeSalary = () => setSalary(document.getElementById("salary-normal").value);
//   const changeAddress = () => setAddress(document.getElementById("address-normal").value);
//   const changeContact = () => setContact(document.getElementById("contact-normal").value);

//   const submitNormalEmpData = async () => {
//     const obj = {
//       userName: name,
//       userEmail: email,
//       userAddress: address,
//       userPosition: position,
//       userSalary: salary,
//       userContact: contact,
//     };

//     try {
//       const response = await axios.post(API_URL + "/submitNormalEmpData", obj);
//       console.log(response.data.message);
//       // Refresh data after successful submission
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(API_URL + "/getNormalEmpData");
//           setItems(response.data);
//         } catch (error) {
//           console.error("Error fetching data", error);
//         }
//       };
//       fetchData();
//     } catch (error) {
//       console.error("Error submitting data", error);
//     }
//   };

//   return (
//     <>
//       <div id="content-normal" className="content">
//         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">Add Data</h1>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <form id="dataForm-normal" className="form-container">
//                   <label><b>Name</b></label>
//                   <input type="text" id="name-normal" value={name} onChange={() => changeName()} required />
//                   <label><b>Email</b></label>
//                   <input type="email" id="email-normal" value={email} onChange={() => changeEmail()} required />
//                   <label><b>Position</b></label>
//                   <input type="text" id="position-normal" value={position} onChange={() => changePosition()} required />
//                   <label><b>Salary</b></label>
//                   <input type="number" id="salary-normal" value={salary} onChange={() => changeSalary()} required />
//                   <label><b>Address</b></label>
//                   <input type="text" id="address-normal" value={address} onChange={() => changeAddress()} required />
//                   <label><b>Contact</b></label>
//                   <input type="text" id="contact-normal" value={contact} onChange={() => changeContact()} required />
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary" onClick={() => submitNormalEmpData()}>Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2>Normal Employees</h2>

//         <button type="button" className="openFormBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Data</button>

//         <div>
//           <h1>Employee Table</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Position</th>
//                 <th>Salary</th>
//                 <th>Address</th>
//                 <th>Contact</th>
//                 {/* <th>Actions</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={item._id}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.position}</td>
//                   <td>{item.salary}</td>
//                   <td>{item.address}</td>
//                   <td>{item.contact}</td>
//                   {/* <td>
//                     <button className="btn btn-warning btn-sm">Edit</button>
//                     <button className="btn btn-danger btn-sm">Delete</button>
//                   </td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NormalEmployee;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../APIURL/apiUrl";

// const NormalEmployee = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [position, setPosition] = useState("");
//   const [salary, setSalary] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Fetch employee data on component mount
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL + "/getNormalEmpData");
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const changeName = () => setName(document.getElementById("name-normal").value);
//   const changeEmail = () => setEmail(document.getElementById("email-normal").value);
//   const changePosition = () => setPosition(document.getElementById("position-normal").value);
//   const changeSalary = () => setSalary(document.getElementById("salary-normal").value);
//   const changeAddress = () => setAddress(document.getElementById("address-normal").value);
//   const changeContact = () => setContact(document.getElementById("contact-normal").value);

//   const submitNormalEmpData = async () => {
//     const obj = {
//       userName: name,
//       userEmail: email,
//       userAddress: address,
//       userPosition: position,
//       userSalary: salary,
//       userContact: contact,
//     };

//     try {
//       const response = await axios.post(API_URL + "/submitNormalEmpData", obj);
//       console.log(response.data.message);

//       // Clear form fields
//       setName("");
//       setEmail("");
//       setPosition("");
//       setSalary("");
//       setAddress("");
//       setContact("");

//       // Refresh data
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(API_URL + "/getNormalEmpData");
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

//   return (
//     <>
//       <div id="content-normal" className="content">
//         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">Add Data</h1>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <form id="dataForm-normal" className="form-container">
//                   <label><b>Name</b></label>
//                   <input type="text" id="name-normal" value={name} onChange={() => changeName()} required />
//                   <label><b>Email</b></label>
//                   <input type="email" id="email-normal" value={email} onChange={() => changeEmail()} required />
//                   <label><b>Position</b></label>
//                   <input type="text" id="position-normal" value={position} onChange={() => changePosition()} required />
//                   <label><b>Salary</b></label>
//                   <input type="number" id="salary-normal" value={salary} onChange={() => changeSalary()} required />
//                   <label><b>Address</b></label>
//                   <input type="text" id="address-normal" value={address} onChange={() => changeAddress()} required />
//                   <label><b>Contact</b></label>
//                   <input type="text" id="contact-normal" value={contact} onChange={() => changeContact()} required />
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary" onClick={() => submitNormalEmpData()}>Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2>Normal Employees</h2>

//         <button type="button" className="openFormBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Data</button>

//         <div>
//           <h1>Employee Table</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Position</th>
//                 <th>Salary</th>
//                 <th>Address</th>
//                 <th>Contact</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={item._id}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.position}</td>
//                   <td>{item.salary}</td>
//                   <td>{item.address}</td>
//                   <td>{item.contact}</td>
//                   <td>
//                     <button className="btn btn-warning btn-sm">Edit</button>
//                     <button className="btn btn-danger btn-sm">Delete</button>
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

// export default NormalEmployee;
// main             ---------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../APIURL/apiUrl";

// const NormalEmployee = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [position, setPosition] = useState("");
//   const [salary, setSalary] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [items, setItems] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Fetch employee data on component mount
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL + "/getNormalEmpData");
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const changeName = () =>
//     setName(document.getElementById("name-normal").value);
//   const changeEmail = () =>
//     setEmail(document.getElementById("email-normal").value);
//   const changePosition = () =>
//     setPosition(document.getElementById("position-normal").value);
//   const changeSalary = () =>
//     setSalary(document.getElementById("salary-normal").value);
//   const changeAddress = () =>
//     setAddress(document.getElementById("address-normal").value);
//   const changeContact = () =>
//     setContact(document.getElementById("contact-normal").value);

//   const submitNormalEmpData = async () => {
//     const obj = {
//       userName: name,
//       userEmail: email,
//       userAddress: address,
//       userPosition: position,
//       userSalary: salary,
//       userContact: contact,
//     };

//     try {
//       if (editingId) {
//         // Update existing record
//         await axios.put(API_URL + `/updateNormalEmpData/${editingId}`, obj);
//       } else {
//         // Create new record
//         await axios.post(API_URL + "/submitNormalEmpData", obj);
//       }

//       // Clear form fields
//       setName("");
//       setEmail("");
//       setPosition("");
//       setSalary("");
//       setAddress("");
//       setContact("");
//       setEditingId(null);

//       // Refresh data
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(API_URL + "/getNormalEmpData");
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

//   const handleEdit = (id) => {
//     const itemToEdit = items.find((item) => item._id === id);
//     if (itemToEdit) {
//       setName(itemToEdit.name);
//       setEmail(itemToEdit.email);
//       setPosition(itemToEdit.position);
//       setSalary(itemToEdit.salary);
//       setAddress(itemToEdit.address);
//       setContact(itemToEdit.contact);
//       setEditingId(id);

//       // Open the modal for editing
//       const modal = new bootstrap.Modal(
//         document.getElementById("exampleModal")
//       );
//       modal.show();
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(API_URL + `/deleteNormalEmpData/${id}`);
//       // Refresh data
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(API_URL + "/getNormalEmpData");
//           setItems(response.data);
//         } catch (error) {
//           console.error("Error fetching data", error);
//         }
//       };
//       fetchData();
//     } catch (error) {
//       console.error("Error deleting data", error);
//     }
//   };

//   // Filter items based on the search term
//   const filteredItems = items.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.contact.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div id="content-normal" className="content">
//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabIndex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">
//                   {editingId ? "Edit Data" : "Add Data"}
//                 </h1>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form id="dataForm-normal" className="form-container">
//                   <label>
//                     <b>Name</b>
//                   </label>
//                   <input
//                     type="text"
//                     id="name-normal"
//                     value={name}
//                     onChange={() => changeName()}
//                     required
//                   />
//                   <label>
//                     <b>Email</b>
//                   </label>
//                   <input
//                     type="email"
//                     id="email-normal"
//                     value={email}
//                     onChange={() => changeEmail()}
//                     required
//                   />
//                   <label>
//                     <b>Position</b>
//                   </label>
//                   <input
//                     type="text"
//                     id="position-normal"
//                     value={position}
//                     onChange={() => changePosition()}
//                     required
//                   />
//                   <label>
//                     <b>Salary</b>
//                   </label>
//                   <input
//                     type="number"
//                     id="salary-normal"
//                     value={salary}
//                     onChange={() => changeSalary()}
//                     required
//                   />
//                   <label>
//                     <b>Address</b>
//                   </label>
//                   <input
//                     type="text"
//                     id="address-normal"
//                     value={address}
//                     onChange={() => changeAddress()}
//                     required
//                   />
//                   <label>
//                     <b>Contact</b>
//                   </label>
//                   <input
//                     type="text"
//                     id="contact-normal"
//                     value={contact}
//                     onChange={() => changeContact()}
//                     required
//                   />
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={() => submitNormalEmpData()}
//                 >
//                   {editingId ? "Update" : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2>Normal Employees</h2>

//         <button
//           type="button"
//           className="openFormBtn"
//           data-bs-toggle="modal"
//           data-bs-target="#exampleModal"
//         >
//           Add Data
//         </button>
//         <div>
//           <div className="searchItem">
//             <input
//               type="text"
//               className="search"
//               placeholder="Search employees..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <h1>Employee Table</h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 {/* <th>S.No</th> */}
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Position</th>
//                 <th>Salary</th>
//                 <th>Address</th>
//                 <th>Contact</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={item._id}>
//                   {/* <td>{index + 1}</td> */}
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.position}</td>
//                   <td>{item.salary}</td>
//                   <td>{item.address}</td>
//                   <td>{item.contact}</td>
//                   <td>
//                     <button
//                       className="btn btn-warning btn-sm"
//                       onClick={() => handleEdit(item._id)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDelete(item._id)}
//                     >
//                       Delete
//                     </button>
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

// export default NormalEmployee;



import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../APIURL/apiUrl";

const NormalEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch employee data on component mount
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "/getNormalEmpData");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const changeName = () => setName(document.getElementById("name-normal").value);
  const changeEmail = () => setEmail(document.getElementById("email-normal").value);
  const changePosition = () => setPosition(document.getElementById("position-normal").value);
  const changeSalary = () => setSalary(document.getElementById("salary-normal").value);
  const changeAddress = () => setAddress(document.getElementById("address-normal").value);
  const changeContact = () => setContact(document.getElementById("contact-normal").value);

  const submitNormalEmpData = async () => {
    const obj = {
      userName: name,
      userEmail: email,
      userAddress: address,
      userPosition: position,
      userSalary: salary,
      userContact: contact,
    };

    try {
      if (editingId) {
        // Update existing record
        await axios.put(API_URL + `/updateNormalEmpData/${editingId}`, obj);
      } else {
        // Create new record
        await axios.post(API_URL + "/submitNormalEmpData", obj);
      }

      // Clear form fields
      setName("");
      setEmail("");
      setPosition("");
      setSalary("");
      setAddress("");
      setContact("");
      setEditingId(null);

      // Refresh data
      const fetchData = async () => {
        try {
          const response = await axios.get(API_URL + "/getNormalEmpData");
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

  const handleEdit = (id) => {
    const itemToEdit = items.find(item => item._id === id);
    if (itemToEdit) {
      setName(itemToEdit.name);
      setEmail(itemToEdit.email);
      setPosition(itemToEdit.position);
      setSalary(itemToEdit.salary);
      setAddress(itemToEdit.address);
      setContact(itemToEdit.contact);
      setEditingId(id);
      
      // Open the modal for editing
      const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
      modal.show();
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(API_URL + `/deleteNormalEmpData/${id}`);
      // Refresh data
      const fetchData = async () => {
        try {
          const response = await axios.get(API_URL + "/getNormalEmpData");
          setItems(response.data);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      fetchData();
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  // Filter items based on the search term
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div id="content-normal" className="content">
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {editingId ? "Edit Data" : "Add Data"}
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="dataForm-normal" className="form-container">
                  <label><b>Name</b></label>
                  <input type="text" id="name-normal" value={name} onChange={() => changeName()} required />
                  <label><b>Email</b></label>
                  <input type="email" id="email-normal" value={email} onChange={() => changeEmail()} required />
                  <label><b>Position</b></label>
                  <input type="text" id="position-normal" value={position} onChange={() => changePosition()} required />
                  <label><b>Salary</b></label>
                  <input type="number" id="salary-normal" value={salary} onChange={() => changeSalary()} required />
                  <label><b>Address</b></label>
                  <input type="text" id="address-normal" value={address} onChange={() => changeAddress()} required />
                  <label><b>Contact</b></label>
                  <input type="text" id="contact-normal" value={contact} onChange={() => changeContact()} required />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => submitNormalEmpData()}>
                  {editingId ? "Update" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2>Normal Employees</h2>

        <button type="button" className="openFormBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Data</button>

        <div className="mb-3">
          <label><b>Search:</b></label>
          <input
            type="text"
            className="form-control"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <h1>Employee Table</h1>
          <table className="table">
            <thead>
              <tr>
                {/* <th>S.No</th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={item._id}>
                  {/* <td>{index + 1}</td> */}
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.position}</td>
                  <td>{item.salary}</td>
                  <td>{item.address}</td>
                  <td>{item.contact}</td>
                  <td>
                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(item._id)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
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

export default NormalEmployee;
