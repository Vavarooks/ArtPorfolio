import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import Contact from './views/Contact'
import About from './views/About'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/about'}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/contact'}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
