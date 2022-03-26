import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';

import MoviesList from './components/movies-list';
import Login from './components/login';

function App() {
  // Declare a user state variable using React hooks, with null as the
  // initial value.
  const [user, setUser] = React.useState(null);

  async function login(user = null) { // default user to null
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              { user ? (
                <button onClick={logout}>Logout User</button>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/login" element={<Login login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
