import { connect } from "react-redux";
import { getUser }from "../../redux/actions/user"

const mapDispatchToProps = {
  getUser
};

export const enhancer = connect(null, mapDispatchToProps);