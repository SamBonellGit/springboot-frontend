import React from 'react'
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

export default function Homepage() {

    const [users, setUsers] = useState([]);

    const {id} = useParams()

  useEffect(() => {
    loadUsers();
  }, [] );

  const loadUsers = async () => {
    const result= await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
  }  
  return (
    <div className='container'>
        <div className='py-4'>
           
            
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
            users.map((user,index)=>(
                <tr>
                <td key={index}>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to ={`/viewuser/${user.id}`}className="btn custom-outline-button mx-2">View</Link>
                    <Link to={`/edituser/${user.id}`} 
                    className="btn custom-button mx-2">Edit</Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=>deleteUser(user.id)}>
                      Delete</button>



                </td>
              </tr>
            ))
        }
      
       
      </tbody>
    </Table>


        </div>
        
        
        
    </div>
  )
}
