import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Signin() {
  return (
    <div className="d-flex vh-100">
    
      <div className="bg-primary text-white d-flex flex-column justify-content-center align-items-center w-50 p-5">
        <h1 className="mb-4">
          <img
            src="https://bootstrapbrain.com/wp-content/uploads/2022/11/bsb-framework.png" height={"100px"} width={"100px"} 
            alt="Bootstrap Brain Logo"
            className="me-2"
          />
          Bootstrap Brain
        </h1>
        <h2>We make digital products that drive you to stand out.</h2>
        <p className="mt-3 text-center">
          We write words, take photos, make videos, and interact with artificial intelligence.
        </p>
      </div>

      
      <div className="d-flex justify-content-center align-items-center w-50 p-5">
        <div className="card p-4 w-75 shadow">
          <h3 className="text-center mb-3">Sign in</h3>
          <p className="text-center text-muted">
            Don't have an account? <a href="#">Sign up</a>
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="keepLoggedIn" />
              <label htmlFor="keepLoggedIn" className="form-check-label">
                Keep me logged in
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Log in now
            </button>
            <div className="text-end mt-2">
              <a href="#">Forgot password</a>
            </div>
          </form>
          <hr />
          <p className="text-center">Or continue with</p>
          <div className="d-flex justify-content-evenly">
            <button className="btn btn-outline-secondary rounded-circle">
              <i className="bi bi-google"></i>
            </button>
            <button className="btn btn-outline-secondary rounded-circle">
              <i className="bi bi-facebook"></i>
            </button>
            <button className="btn btn-outline-secondary rounded-circle">
              <i className="bi bi-apple"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
