import React, {useEffect,useState} from "react"
import "./Navbar.css";
import menu from '../../assets/menu.jpg'
import logo from '../../assets/logo.jpg'
import { Link }  from 'react-scroll';
const Navbar = () => {

const[sticky, setSticky] = useState(false);

useEffect(()=>{
window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
})


}
)
const [mobileMenu, setMobileMenu] = useState(false);

const toggleMenu = ()=>{
mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

    return(
     <nav className={`container ${sticky ? "dark-nav" : " "} `}>
            <div className='logo'><img src={logo} alt="logo" className="logo-img" /> Edusity </div>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                 <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
                 <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
                 <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                 <li> <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                 <li> <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials </Link></li>
                <li><button className="btn"> <Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></button></li>
            </ul>
            <img src={menu} alt="" className="menu-icon" onClick={toggleMenu}/>
     </nav>

    )
}

export default Navbar;