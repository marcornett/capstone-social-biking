import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/user"

const mapDispatchToProps = {
  registerUser
};

export const enhancer = connect( null, mapDispatchToProps);