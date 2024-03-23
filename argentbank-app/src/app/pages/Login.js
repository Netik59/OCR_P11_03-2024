import { useSelector, useDispatch } from "react-redux";
import { loginAsync } from "../../features/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth)
    console.log(authState)

    useEffect(() => {
        if (authState.token !== null) {
            navigate("/user");
        }
    }, [authState.token, navigate]);


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };



    const onSubmit = (e) => {
        e.preventDefault();

        console.log("email:", email);
        console.log("Password:", password);

        dispatch(loginAsync({
            email: email,
            password: password
        }))
    }

    return (
        <main className="main bg-dark">
            <div className="dark-background">
                <section className="sign-in-content">
                    <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} autoComplete="email" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" onClick={onSubmit}>Sign In</button>

                    </form>
                </section>
            </div>
        </main>
    )

}