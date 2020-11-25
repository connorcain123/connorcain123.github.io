import {Link} from 'react-scroll';
import CV from '../../assets/downloads/CV.pdf'
import './header.css';

export default function Header() {
    return (
        <header id="page-top">
            <div className="header-text-container">
                <p className="header-sub-title">Hello. My name is</p>
                <h1 className="header-title">Connor Cain</h1>
                <p className="header-desc">I am an Otago Polytechnic graduate with a Bachelors’ degree in information technology. 
                Looking to start my career in the IT industry, pursuing a developer role at a friendly and motivated company.</p>
                <Link className="header-button" to="projects" spy={true} smooth={true} duration={500}>
                    My projects
                </Link>
                <div className="social-links">
                    <a className="social-link" href="https://www.linkedin.com/in/connor-cain-8b2134193/">LinkedIn</a>
                    <a className="social-link" href={CV} download>Download CV</a>
                    <a className="social-link" href="https://github.com/connorcain123">Github</a>
                </div>
            </div>
            <div className="header-img-container">

            </div>
        </header>
    );
}