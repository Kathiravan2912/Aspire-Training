
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../APIURL/apiUrl";

const BankEvent = () => {
  const [eventname, setEventname] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch event data on component mount
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "/getEventData");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!eventname) {
      newErrors.eventname = "Event Name is required!";
    } 
    // else if (!/^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(name)) {
    //   newErrors.name =
    //     "Name should start with a capital letter and include an initial! (Example: John Doe or D John)";
    // }
    if (!description) {
      newErrors.description = "Description is required!";
    }
    if (!date) {
      newErrors.date = "Date is required!";
    }
    if (!place) {
      newErrors.place = "Place is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitEventData = async () => {
    if (!validateForm()) return;

    const obj = {
      userEventname: eventname,
      userDescription : description,
      userDate: date,
      userPlace: place
    };

    try {
      if (editingId) {
        // Update existing record
        await axios.put(API_URL + `/updateEventData/${editingId}`, obj);
      } else {
        // Create new record
        await axios.post(API_URL + "/submitEventData", obj);
      }

      // // Clear form fields
      setEventname("");
      setDescription("");
      setDate("");
      setPlace("");
      setEditingId(null);

      // Refresh data
      const fetchData = async () => {
        try {
          const response = await axios.get(API_URL + "/getEventData");
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
  // const filteredItems = items.filter(
  //   (item) =>
  //     item.eventname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.place.toLowerCase().includes(searchTerm.toLowerCase()) 
  // );
  const filteredItems = items.filter(
    (item) =>
      (item.eventname?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (item.description?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (item.date?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (item.place?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );
  

  return (
    <>
      <div id="content-event" className="content">
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
                    <b>Event Name</b>
                  </label>
                  <input
                    type="text"
                    id="name-event"
                    value={eventname}
                    onChange={(e) => setEventname(e.target.value)}
                    required
                  />
                  {errors.eventname && (
                    <div className="text-danger">{errors.eventname}</div>
                  )}

                  <label>
                    <b>Description</b>
                  </label>
                  <input
                    type="text"
                    id="description-event"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  {errors.description && (
                    <div className="text-danger">{errors.description}</div>
                  )}

                  <label>
                    <b>Date</b>
                  </label>
                  <input
                    type="date"
                    id="date-event"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  {errors.date && (
                    <div className="text-danger">{errors.date}</div>
                  )}

                  <label>
                    <b>Place</b>
                  </label>
                  <input
                    type="text"
                    id="place-event"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    required
                  />
                  {errors.place && (
                    <div className="text-danger">{errors.place}</div>
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
                  onClick={submitEventData}
                >
                  {editingId ? "Update" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2>Events</h2>

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
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <h1>Event's Data</h1>
          <table className="table">
            <thead>
              <tr>
                <th className="Tableheader">Event Name</th>
                <th className="Tableheader">Description</th>
                <th className="Tableheader">Date</th>
                <th className="Tableheader">Place</th>
                <th className="Tableheader">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item._id}>
                  <td className="TableColumn">{item.eventname}</td>
                  <td className="TableColumn">{item.description}</td>
                  <td className="TableColumn">{item.date}</td>
                  <td className="TableColumn">{item.place}</td>
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

export default BankEvent;
