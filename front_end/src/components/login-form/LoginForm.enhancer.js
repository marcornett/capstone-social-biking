import { connect } from "react-redux";
import {login} from "../../redux/actions/auth"
import { getUser } from "../../redux/actions/user"


const mapStateToProps = (state) => ({
  username: state.auth.username,
  error: state.auth.error,
});

const mapDispatchToProps = {
  login,
  getUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);