import { connect } from "react-redux";
import {registerGroup} from "../../redux/actions/groups"

const mapDispatchToProps = {
  registerGroup
};

export const enhancer = connect(null, mapDispatchToProps);