import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/user"


const mapStateToProps = (state) => ({
  users:state.allUsers.users,
 
});

const mapDispatchToProps = {
  getUsers
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);