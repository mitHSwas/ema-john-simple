import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css';

const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError("Password should be 6 character or more.")
            return;
        }
        if (password !== confirm) {
            setError("Your password did not matched!");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className="btn-submit" type="submit" value="Signup" />
                <p>Already Have an Account ? <Link to="/login">Login</Link> </p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default Signup;