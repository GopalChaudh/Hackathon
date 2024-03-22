import React, { useState } from 'react';
import './signup.css';

export default function SignUp() {
  // State variables for form fields
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      fullName,
      userName,
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      // Reset form fields after successful registration
      setFullName('');
      setUserName('');
      setEmail('');
      setPassword('');

      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-screen">
        <div className="signup-screen__content">
          <form className="signup" onSubmit={handleSubmit}>
            <div className="signup__field">
              <i className="signup__icon fas fa-user"></i>
              <input 
                type="text" 
                name='fullName' 
                className="signup__input" 
                placeholder="Full Name" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                required 
              />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-user"></i>
              <input 
                type="text" 
                name='userName' 
                className="signup__input" 
                placeholder="Username" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                required 
              />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-envelope"></i>
              <input 
                type="email" 
                name='email' 
                className="signup__input" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-lock"></i>
              <input 
                type="password" 
                name='password' 
                className="signup__input" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button className="button signup__submit" type="submit">
              <span className="button__text">Signup Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-signup">
            <h3>Signup via</h3>
            <div className="social-icons">
              <a href="#" className="social-signup__icon fab fa-instagram"></a>
              <a href="#" className="social-signup__icon fab fa-facebook"></a>
              <a href="#" className="social-signup__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="signup-screen__background">
          <span className="signup-screen_backgroundshape signup-screenbackground_shape4"></span>
          <span className="signup-screen_backgroundshape signup-screenbackground_shape3"></span>		
          <span className="signup-screen_backgroundshape signup-screenbackground_shape2"></span>
          <span className="signup-screen_backgroundshape signup-screenbackground_shape1"></span>
        </div>		
      </div>
    </div>
  );
}
