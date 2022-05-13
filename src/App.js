/*eslint-disable-next-line*/
import React,{Suspense} from 'react';
import './App.css';
import {Nav,Navbar, NavDropdown, Container} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Upload from './pages/Upload';
import Main from './pages/Main';
import Landingpage from './pages/Landingpage';

function App() {

  let navigate=useNavigate();


  return (
   

    <div className="App">

     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">ONE_CAU</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link onClick={()=>{navigate(-1)}}>Home</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/landingpage')}}>Home</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/upload')}}>upload</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/main')}}>mypage</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to="/">Home</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>





<Routes>

  <Route path="/upload" element={<Upload />}/>
  <Route path="/" element={<Upload />}/>
   <Route path="/main" element={<Main />}/>
  <Route path="/landingpage" element={<Landingpage />}/>

</Routes>
    </div>
  );
};

export default App;
