import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
    });

    const{name, username, email}=user;

    const onInputChange=(e) => {

        setUser({...user,[e.target.name]:e.target.value});

    };

    useEffect(()=> {
      loadUser();
    }, []);



    const onSubmit= async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");

    };

    const loadUser = async ()=> {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data)
    }



    


  return (
    <Container className="text-white-colour">
      <Row variant="dark">
        <Col md-6 offset-md-3 border rounded p-4 mt-2 shadow variant="dark">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>

        
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Username"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Name"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}

            />
          </div>
          <button type="submit" className="btn custom-button m-3">Submit</button>
          <Link className="btn btn-danger m-3" to="/">Cancel</Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
