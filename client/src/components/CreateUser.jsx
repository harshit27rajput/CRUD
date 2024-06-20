import React,{useState} from 'react'
import axios from  "axios"
import { Navigate, useNavigate } from 'react-router-dom'

function CreateUser() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState('')

  const navigate=useNavigate()

    const submit=(e)=>{
      e.preventDefault()
        axios.post('http://localhost:3004/createUser',{name,email,age})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/')
    }
  return (
    <div className='d-flex bg-primary justify-content-center align-items-center vh-100'>
      <div className=" w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
             <h2>Add User</h2>
            <div className="mb-2">
                <label  >Name</label>
                <input type="text" className="form-control" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label  >Email</label>
                <input type="email" className="form-control" placeholder='Enter Email'onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label  >Age</label>
                <input type="text" className="form-control" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser