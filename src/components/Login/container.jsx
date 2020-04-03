import React from 'react';
import PropTypes from 'prop-types';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';

const Login = (props) => {
  const { loginUser } = props;
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    loginUser().then(() => {
      history.replace(from);
    });
  };

  return (
    <div className="flex items-center justify-center py-12 px-6 mt-20">
      <div className="max-w-md w-full">
        <h2 className="text-2xl">Sign in to your account</h2>
        <form className="mt-8" action="#" method="POST">
          <div>
            <input aria-label="Email address" name="email" type="email" className="input mb-2" placeholder="Email address" required />
          </div>
          <div>
            <input aria-label="Password" name="password" type="password" className="input" placeholder="Password" required />
          </div>
          <button type="button" className="btn mt-4" onClick={login}>Submit</button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default Login;
