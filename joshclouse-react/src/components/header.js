import linkedinImg from '../assets/linkedin.png';
import githubImg from '../assets/github.png';
import emailImg from '../assets/email.png'
const Header = (props) => {
    return(	
        <header id="foreground">
            <div id="top-bar">
                <div id="contact-info" className="fade-in">
                    <div className="contact-info-item"><img src={emailImg}/>JoshMClouse@Gmail.com</div>
                    <div className="contact-info-item"><a href="https://www.linkedin.com/in/joshua-clouse-b3a444155/"><img src={linkedinImg}/><span>Linkedin</span></a></div>
                    <div className="contact-info-item"><a href="https://github.com/JoshuaClouse"><img src={githubImg}/><span>Github</span></a></div>
                </div>
            </div>
            <div className="flex-container-center" id="description">
                <h1 className="description-item fade-in" id="title">Josh <span className="highlight">Clouse</span></h1>
                <hr className="fade-in"/>
                <h1 className="description-item fade-in">SOFTWARE ENGINEER & GAME DESIGNER</h1>
                <p className="description-item">
                    <span className="fade-in-delay1">UC Santa Cruz </span>
                    <span className="fade-in-delay2">| Softwre Engineer </span>
                    <span className="fade-in-delay3">| Musician</span>
                </p>
            </div>
            <div id="contact-info" className="fade-in">
                <div className="contact-info-item"><a href="#work-history">
                        <p>EXPERIENCE</p>
                    </a></div>
                <div className="contact-info-item"><a href="#projects">
                        <p>PROJECTS</p>
                    </a></div>
            </div>
        </header>
    );
}

export default Header;