import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Users from './components/Users';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>} />
          <Route path='/createUser' element={<CreateUser/>} />
          <Route path='/getData/:id' element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App