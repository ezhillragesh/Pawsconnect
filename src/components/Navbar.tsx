import '../App.css'
import { Link } from "react-router-dom";
// import logo from '../assets/logo.svg'
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >

<div className="container-fluid">
  <div className='navbar-header'>
  <Link style={{textDecoration: 'none'}} to="/"><a className='navbar-brand' href='#'>Pawsconnect</a></Link></div>
 
  <ul className="navbar-nav mr-auto">
  <li className="nav-item">
    <Link style={{textDecoration: 'none'}} to="/"><a className="nav-link" href="#">Home</a></Link>
    </li>
    <li className="nav-item active">
    <Link style={{textDecoration: 'none'}} to="/About"><a className="nav-link" href="#">About us</a></Link>
    </li>
    <li className="nav-item">
    <Link style={{textDecoration: 'none'}} to="/Rcenter"><a className="nav-link" href="#">Rescue Centers</a></Link>
    </li>
    <li className="nav-item">
    <Link style={{textDecoration: 'none'}} to="/Donate"><a className="nav-link" href="#">Donate us</a></Link>
    </li>
  </ul>
</div>

</nav>


        
        </>
    )
}

export default Navbar