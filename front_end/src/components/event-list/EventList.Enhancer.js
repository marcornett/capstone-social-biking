import { connect } from "react-redux";
import { groupData } from "../../redux/actions/groups"


const mapStateToProps = (state) => ({
  eventList: state.group.eventList,
});

const mapDispatchToProps = {
  groupData
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
