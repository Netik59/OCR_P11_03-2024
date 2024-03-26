import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export const User = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (!token) {
            navigate("/sign-in");
        }
    }, [token, navigate]);

    const onClick = (e) => {
        e.preventDefault();
        setIsFormOpen(!isFormOpen);
    }

    return (
        <main className="main bg-dark">
            <div className="dark-background">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button" onClick={onClick}>Edit Name</button>
                    {isFormOpen && (
                        <div className="edit-name-content">
                            <p className="edit-title">Edit User info</p>
                            <form className="input-wrapper">
                                <div>
                                    <label htmlFor="username" className="edit-label">User name:</label>
                                    <input
                                        type="text"
                                        id="username"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="firstname" className="edit-label">First name:</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        value={"Tony"}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="edit-label">Last name:</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={"Jarvis"}
                                        readOnly
                                    />
                                </div>

                                <div className="edit-buttons">
                                    <button type="button" className="edit-button saveAndCancel">Save</button>
                                    <button type="button" className="edit-button saveAndCancel">Cancel</button>
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