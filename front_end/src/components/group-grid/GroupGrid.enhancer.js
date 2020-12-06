import { connect } from "react-redux";
import{getAllGroups} from "../../redux/actions/groups"

// need to add a reducer
const mapStateToProps = (state) => ({
  groups:state.group.groups
});

const mapDispatchToProps = {
  getAllGroups
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);