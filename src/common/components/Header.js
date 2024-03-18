import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <Link to="/">
                    <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                </Link>

                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} />
                    Sign In
                </a>
            </div>
        </nav>
    )
}