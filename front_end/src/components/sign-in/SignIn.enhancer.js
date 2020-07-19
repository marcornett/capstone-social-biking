import { connect } from "react-redux";
import { login } from "../../redux/actions/auth"

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.user
})

const mapDispatchToProps = {
  login
};

export const enhancer = connect(null, mapDispatchToProps);