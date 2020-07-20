import { connect } from "react-redux";
import { getUser } from "../../redux/actions/user"
import { groupData } from "../../redux/actions/groups"

const mapStateToProps =(state) => ({
groups: state.group.groups,
userGroups: state.user.groups
})

const mapDispatchToProps = {
  getUser,
  groupData
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);