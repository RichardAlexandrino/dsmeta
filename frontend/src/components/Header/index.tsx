import logo from '../../assets/img/logo.svg';
import gitIcon from '../../assets/img/github.svg';
import instaIcon from '../../assets/img/instagram.svg';
import linkedInIcon from '../../assets/img/linkedin.svg';
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por Richard Alexandrino </p>
                <p className="dsmeta-logo-container-logo">
                    <a href="https://github.com/RichardAlexandrino"><img src={gitIcon} alt="Notificar" /></a>
                        <a href="https://www.instagram.com/_alex.richard/"><img src={instaIcon} alt="Notificar" /></a>
                        <a href="https://www.linkedin.com/in/richard-alexandrino/"><img src={linkedInIcon} alt="Notificar" /></a>
                </p>
            </div>
        </header>
    )
}

export default Header;
