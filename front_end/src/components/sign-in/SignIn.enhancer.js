import { connect } from "react-redux";
import { registerUser, getUser } from "../../redux/actions/user"
import { login } from "../../redux/actions/auth"

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  groups: state.user.groups
})

const mapDispatchToProps = {
  registerUser,
  getUser,
  login
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);