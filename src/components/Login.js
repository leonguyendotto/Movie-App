import React, { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import API from '../API';
//Components
import Button from './Button';
//Styles
import {Wrapper} from './Login.styles'
//Context 
import { Context } from "../context";

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState(false); 

    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            setUser ({ sessionId: sessionId.session_id, username});
            
            navigate('/');

        } catch (error){
            setError(true)
        }
    };
    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUserName(value);
        if (name === 'password') setPassword(value);
    };


    return (
        <Wrapper>
            {error && <div className="error">Something went wrong, please try again!</div>}
            <h3>Please use your TMDB account</h3>
            <div>
                <label>Username:</label>
                <input
                    type='text'
                    value={username}
                    name="username"
                    onChange={handleInput}
                    />
                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    name="password"
                    onChange={handleInput}
                    />
            </div>
            <Button text ='Login' callback={handleSubmit}/>
            <div className="cta">
                <p>If you do not have an account, registering for an account is free and simple. <a href="https://www.themoviedb.org/signup" target="_blank">Click here</a> to get started.</p>
            </div>
        </Wrapper>
    )
}

export default Login ;