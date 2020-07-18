import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/user"

// add the action and reducer first
const mapDispatchToProps = {
  registerUser
};

export const enhancer = connect( null, mapDispatchToProps);