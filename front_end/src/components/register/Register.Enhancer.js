import { connect } from "react-redux";
import { getUser } from "../../redux/actions/user"


const mapStateToProps = (state) => ({
  username: state.user.username,
  password:state.user.password,
  email:state.user.email,
});

const mapDispatchToProps = {
  getUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);