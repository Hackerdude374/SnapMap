// src/components/SignInForm.tsx
import React from 'react';

const SignInForm: React.FC = () => {
  return (
    <div className="form-card">
      <p>This is a Sign In form</p>
      <div id="sign_in_alerts"></div>
      <form id="sign_in_form">
        <div className="form-group">
          <label htmlFor="sign_in_email">Email address</label>
          <input type="email" className="form-control" id="sign_in_email" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="sign_in_pwd">Password</label>
          <input type="password" className="form-control" id="sign_in_pwd" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
};

export default SignInForm;
