import { connect } from 'react-redux';
import App from './container';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isVerifying: state.auth.isVerifying,
});

export default connect(mapStateToProps)(App);
