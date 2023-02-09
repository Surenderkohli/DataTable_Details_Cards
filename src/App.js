import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import SignIn from './signIn';
import NavBar from './NavBar';
import Table from './Table';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/table' element={<Table/>}/>
  
   {/* <SignIn/> */}
   
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
