import React from 'react';

const LoginSignup = () => {
  return (
    <div>
      <h1>Login or Signup</h1>
      <form>
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginSignup;