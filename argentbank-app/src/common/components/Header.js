import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import argentBankLogo from '../../img/argentBankLogo.png';
import { useDispatch } from "react-redux";
import { authSlice } from "../../features/authSlice"
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const onClick = (e) => {
        e.preventDefault();
        dispatch(authSlice.actions.logout())
        navigate("/");
    }

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

                {window.location.pathname === '/user' ?
                    <>
                        <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} />
                        <button className="button-like-link user" onClick={onClick}>
                            Tony
                        </button>
                        <FontAwesomeIcon className="fa fa-sign-out" icon={faSignOut} />
                        <button className="button-like-link" onClick={onClick}>
                            Sign Out
                        </button>
                    </> :
                    <>
                        <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} />
                        <Link className="main-nav-item" to="/sign-in">
                            Sign In
                        </Link>
                    </>}


            </div>
        </nav>
    )
}