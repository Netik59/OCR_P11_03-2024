import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../img/argentBankLogo.png';

export const Header = () => {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
            </Link>

            <h1 className="sr-only">Argent Bank</h1>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} />
                    Sign In
                </Link>
            </div>
        </nav>
    )
}