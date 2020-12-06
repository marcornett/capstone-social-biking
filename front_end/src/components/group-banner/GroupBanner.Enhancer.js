import { connect } from "react-redux";
import { groupData } from "../../redux/actions/groups"
import { addToUserGroups } from "../../redux/actions/user"

const mapStateToProps = (state) => ({
  currentGroupName: state.group.groupName,
  location: state.group.location,
  about: state.group.about,
  image: state.group.image,
  user: state.user
});

const mapDispatchToProps = {
  groupData,
  addToUserGroups
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);