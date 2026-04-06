import { useState } from 'react';
import '../styles/Auth.css';
import userSlice from '../store/';

const Auth = () => {
  const { isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn } = userSlice();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isRegister, setIsRegister] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleAuth = () => {
    setIsRegister(prev => !prev);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if(res){
      setIsAdmin(res.isAdmin);
      setIsLoggedIn();
      alert('Successfully logged in!');
    } else {
      alert('Failed to login!');
    }
    
    setIsSubmitting(false);
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Welcome Back</h2>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        {isLoggedIn && (
          <div className="success-message">
            Login successful! Redirecting...
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-input`}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className={`form-input`}
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        { !isRegister ?
          <>
            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>

            <div className="signup-link">
              Don't have an account? <a onClick={() => {toggleAuth()}}>Sign up</a>
            </div>
          </>
          :
          <>
            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>

            <div className="signup-link">
              Already have an account? <a onClick={() => {toggleAuth()}}>Login</a>
            </div>
          </>
        }
      </form>
    </div>
  )
}

export default Auth;
