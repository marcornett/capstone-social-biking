import { connect } from "react-redux";
import { groupData } from "../../redux/actions/groups"


const mapStateToProps = (state) => ({
  groupName: state.group.groupName,
  location: state.group.location,
  about: state.group.about,
  image: state.group.image,
  eventList: state.group.eventList,
});

const mapDispatchToProps = {
  groupData
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);