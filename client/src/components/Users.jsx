import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/getuser')
            .then((data) => setUsers(data.data))
            .catch((err) => console.log(err))
    },[])

    const handleDelete=(id)=>{

        console.log(id)
        axios.delete( `http://localhost:3004/deleteUser/${id}`)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }  

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded shadow p-3 '>
                <Link to='/createUser'><button className='btn btn-success '>Add User</button></Link>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/getData/${user._id}`}><button className='btn btn-primary'>Update</button></Link>
                                    <button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
