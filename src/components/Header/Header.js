import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle={
        color: "white",
        backgroundColor:"blueViolet"
      };
      

    return (
        <div>
            <div className='site-name'>
                <h1>Success Institute</h1>
                <h2>Start your success journey from here</h2>
            </div>
            <nav className='nav-section'>
                <NavLink className='navlink' activeStyle={activeStyle} to='/home'>Home</NavLink>
                <NavLink className='navlink' activeStyle={activeStyle} to='/aboutus'>About Us</NavLink>
                <NavLink className='navlink' activeStyle={activeStyle} to='/services'>Services</NavLink>
                <NavLink className='navlink' activeStyle={activeStyle} to='/contact'>Contact Us</NavLink>
            </nav>
            
        </div>
        
    );
};

export default Header;