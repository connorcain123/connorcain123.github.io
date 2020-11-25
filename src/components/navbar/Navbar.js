import { useState } from 'react';
import {Link} from 'react-scroll';
import './navbar.css';

export default function Navbar() {
    const [showSideNav, setShowSideNav] = useState(false);
    return (
        <nav>
            <button className={`menu-toggle ${showSideNav ? "open" : ""}`} onClick={() => setShowSideNav(!showSideNav)}>
                <span className="hamburger" />
            </button>
            <div className="navbar">
                <ul className="nav-info">
                    <NavInfo title="Name" text="Connor Cain"/>
                    <NavInfo title="Role" text="IT Graduate"/>
                    <NavInfo title="Email" text="connnnorcain@gmail.com"/>
                    <NavInfo title="Phone" text="020 4067 5978"/>
                </ul>
            </div>
            <div className={`side-nav-container ${showSideNav ? "show" : ""}`}>
                <Nav onClick={() => window.innerWidth < 1360 ? setShowSideNav(false) : null} />
            </div>
        </nav>
    );
}

function Nav(props) {
    return (
        <ul className="side-nav">
            <NavLink href="page-top" text="Home" onClick={props.onClick} />
            <NavLink href="about" text="About" onClick={props.onClick} />
            <NavLink href="projects" text="Projects" onClick={props.onClick} />
            <NavLink href="contact" text="Contact" onClick={props.onClick} />
        </ul>
    );
}

function NavLink(props) {
    return (
        <li>
            <Link className="nav-link" activeClass="active" to={props.href} spy={true} smooth={true} duration={500} onClick={props.onClick}>
                {props.text}
            </Link>
        </li>
    );
}

function NavInfo(props) {
    return (
        <li>
            <p className="nav-info-title">{props.title}</p>
            <p className="nav-info-text">{props.text}</p>
        </li>
    );
}