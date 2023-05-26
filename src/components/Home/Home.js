import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/feacture/contactSlice/contactSlice";
import { useDispatch } from "react-redux";
function Home() {
  const contact = useSelector((state) => state.contacts.contacts);
  console.log(contact, "conatcdfg");

const dispatch=useDispatch()
  const onDeleteContact=(id)=>{
  dispatch(deleteContact(id))
  }
  return (
    <div className="home">
      <div className="home__details">
      <Link to="/addContact">
        <button className="btn btn-contact">Add Contact</button>
      </Link>
        <div className="home__contact">
        
        <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((item, index) => {
            return (
              <tr className="contact__row" key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDeleteContact(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
