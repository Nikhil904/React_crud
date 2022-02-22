import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Pages/index.css";
import {useNavigate, useParams} from "react-router-dom";
const ViewUser = () =>{
    useEffect(()=>{
        loadUser();
    },[])
    const {id} = useParams();
    let navigate = useNavigate();
    const[user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const{name,username,email,phone,website} = user;

    const InputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
    }
    const onSubmit = async e =>{
        e.preventDefault();
        navigate("/");
    }
    const loadUser = async () =>{
        const result = await axios.get('http://localhost:3001/users/'+ id);
        setUser(result.data);
    }

    return(
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="heading">View User</h2>
                    <form onSubmit={e=>onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter your Name" name="name" value={name} onChange={e=>InputChange(e)} />
                        </div><br />
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter your UserName" name="username" value={username}  onChange={e=>InputChange(e)} />
                        </div><br />
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter your Email"onChange={e=>InputChange(e)} name="email" value={email} />
                        </div><br />
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter your Phone" onChange={e=>InputChange(e)} name="phone" value={phone} />
                        </div><br />
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter your Website" onChange={e=>InputChange(e)} name="website" value={website} />
                        </div><br />
                    </form>
                </div>
                </div>

        </>
    );
}
export default ViewUser;