import { connect } from "react-redux";
import { login } from "../../redux/actions/auth"


const mapStateToProps = (state) => ({
  username: state.auth.username,
  error: state.auth.error,
});

const mapDispatchToProps = {
  login
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);