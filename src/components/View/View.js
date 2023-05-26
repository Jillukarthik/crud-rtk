import React, {useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getContact } from "../../redux/feacture/contactSlice/contactSlice";

import "./View.css";

const View = () => {
  const contact=useSelector((state)=>state.contacts.contacts);
  const { id } = useParams();
const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getContact(id));
  },[id])
  console.log(id,"idddd")
  console.log(contact[id],"contact")
  return (
    <div className="view">
      <div className="view__card">
        <div className="view__card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="view__container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{contact[id].name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{contact[id].email}</span>
          <br />
          <br />
          <strong>Status: </strong>
          <span>{contact[id].status}</span>
          <br />
          <br />
          <strong>Phone: </strong>
          <span>{contact[id].phone}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;