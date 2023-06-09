import './App.css';
import { Routes, Route ,Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import ContactUs from './components/ContactUs';
import Technologies from './components/Technologies';



function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">MyApp</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="users">Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="contactus">ContactUs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="technologies">Technologies</Link>
      </li>
    </ul>
  </div> 
</nav>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/users" element={< Users />} />
        <Route path="/contactus" element={< ContactUs />} />
        <Route path="/technologies" element={< Technologies/>} >
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
