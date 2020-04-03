import { connect } from 'react-redux';
import Login from './container';
import { loginUser } from '../../actions';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isVerifying: state.auth.isVerifying,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: () => dispatch(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
