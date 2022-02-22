import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import "../Pages/index.css";
const Home = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setuser(result.data)
  };

  const deleteUser = async id =>{
    await axios.delete("http://localhost:3001/users/" + id);
    loadUsers();
  };
  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((item,index)=>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                   <Link to={`/users/view/${item.id}`} className="btn btn-primary moj">View</Link>
                   <Link to={`/users/edit/${item.id}`} className="btn btn-primary moj">Edit</Link>
                   <Link to ="#" onClick = {()=> deleteUser(item.id)} className="btn btn-danger">Delete</Link>
                  </td>
                </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
