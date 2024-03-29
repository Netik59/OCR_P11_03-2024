import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateUserNameAsync } from "../../features/authSlice";

export const User = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (!token) {
            navigate("/sign-in");
        }
    }, [token, navigate]);

    const onClickEdit = () => {
        setIsFormOpen(true);
    };

    const onCancel = () => {
        setIsFormOpen(false);
    };


    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
    };


    const onSave = () => {
        dispatch(updateUserNameAsync({
            userName: userName
        }))
    }

    return (
        <main className="main bg-dark">
            <div className="dark-background">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    {!isFormOpen && (
                        <button className="edit-button" onClick={onClickEdit}>Edit Name</button>
                    )}
                    {isFormOpen && (
                        <div className="edit-name-content">
                            <p className="edit-title">Edit User info</p>
                            <form className="input-wrapper">
                                <div>
                                    <label htmlFor="username" className="edit-label">User name:</label>
                                    <input
                                        className="inputText"
                                        type="text"
                                        id="username"
                                        value={userName}
                                        onChange={handleUsernameChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="firstname" className="edit-label">First name:</label>
                                    <input
                                        className="readOnly inputText"
                                        type="text"
                                        id="firstname"
                                        value={"Tony"}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="edit-label">Last name:</label>
                                    <input
                                        className="readOnly inputText"
                                        type="text"
                                        id="lastname"
                                        value={"Jarvis"}
                                        readOnly
                                    />
                                </div>

                                <div className="edit-buttons">
                                    <button type="button" className="edit-button saveAndCancel" onClick={onSave}>Save</button>
                                    <button type="button" className="edit-button saveAndCancel" onClick={onCancel}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </div>
        </main>
    )
} 