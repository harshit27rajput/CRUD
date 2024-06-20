import React,{useEffect,useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

 function UpdateUser() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()

  const{id}=useParams()
  
  useEffect(()=>{
  axios.get('http://localhost:3004/getData/'+id)
  .then((res)=>{
    setName(res.data.name),
    setEmail(res.data.email),
    setAge(res.data.age)
  })
  
  .catch(err=>console.log(err))
  },[])

  const navigate=useNavigate()

  const update=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:3004/updateUser/'+id,{name,email,age})
    .then((response)=>alert("Update Successfully"))
    .catch((error)=>alert("Error in Updating User Information"))
    
    navigate('/')   // window.location='/'
  }
  return (
    <div className='d-flex bg-primary justify-content-center align-items-center vh-100'>
      <div className=" w-50 bg-white rounded p-3">
        <form onSubmit={update}>
             <h2>Update User</h2>
            <div className="mb-2">
                <label  >Name</label>
                <input type="text" className="form-control" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className="mb-2">
                <label  >Email</label>
                <input type="email" className="form-control" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className="mb-2">
                <label  >Age</label>
                <input type="text" className="form-control" placeholder='Enter Name' onChange={(e)=>setAge(e.target.value)} value={age}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
