// src/components/SignUpForm.tsx
import React from 'react';

const SignUpForm: React.FC = () => {
  return (
    <div className="form-card">
      <p>This is a Sign Up form</p>
      <div id="sign_up_alerts"></div>
      <form id="sign_up_form">
        <div className="form-group">
          <label htmlFor="sign_up_email">Email address</label>
          <input type="email" className="form-control" id="sign_up_email" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="sign_up_pwd1">Password</label>
          <input type="password" className="form-control" id="sign_up_pwd1" />
        </div>
        <div className="form-group">
          <label htmlFor="sign_up_pwd2">Confirm Password</label>
          <input type="password" className="form-control" id="sign_up_pwd2" />
        </div>
        <button type="submit" className="btn btn-success">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
