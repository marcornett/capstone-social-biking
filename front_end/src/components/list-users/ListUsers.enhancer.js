import { connect } from "react-redux";
import { getUser } from "../../redux/actions/user"


const mapStateToProps = (state) => ({
  username:state.user.username,
  image:state.user.image
});

const mapDispatchToProps = {
  getUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);