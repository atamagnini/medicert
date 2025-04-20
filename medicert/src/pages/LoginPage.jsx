import React, { useState, useEffect } from 'react';
import './LoginPage.css';

// Import your logo and decorative elements
import logoImg from '../assets/logo.svg';
import triangleImg from '../assets/triangle.svg';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Check if user is already logged in
    useEffect(() => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        if (token) {
            // Redirect to certificates page if already logged in
            window.location.href = '/certificate';
        }
    }, []);

    // Function to handle login submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const apiUrl = 'https://9vmefwtzl7.execute-api.us-east-1.amazonaws.com/login-user/login-user';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    rememberMe: rememberMe
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();

            // Store token in localStorage or sessionStorage based on rememberMe
            if (rememberMe) {
                localStorage.setItem('authToken', data.token);
            } else {
                sessionStorage.setItem('authToken', data.token);
            }

            // Redirect to dashboard or appropriate page
            window.location.href = '/certificate';

        } catch (err) {
            setError(err.message || 'Failed to login. Please try again.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="header">
                    <div className="logo">MediCert.</div>
                    <div className="nav-links">
                        <a href="/contact" className="contact-link">CONTACT</a>
                        <a href="/login" className="login-link active">LOG IN</a>
                    </div>
                </div>

                <div className="login-form-container">
                    <h1>Log in</h1>

                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-icon">
                                <i className="user-icon"></i>
                            </div>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <div className="input-icon">
                                <i className="lock-icon"></i>
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        <div className="form-options">
                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>
                </div>

                <div className="decorative-elements">
                    <img src={triangleImg} alt="" className="triangle-1" />
                    <img src={triangleImg} alt="" className="triangle-2" />
                    <img src={triangleImg} alt="" className="triangle-3" />
                </div>
            </div>

            <div className="login-right">
                <div className="illustration">
                    <div className="keyhole"></div>
                    <div className="triangle top-right"></div>
                    <div className="triangle bottom-left"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;