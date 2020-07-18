import { connect } from "react-redux";
import { getUser, uploadUserImage, deleteUser } from "../../redux/actions/user"

const mapStateToProps = (state) => ({
  image:state.user.image,
  username:state.user.username,
  password:state.user.username,
  email:state.user.email,
  groups:state.user.groups,
});

const mapDispatchToProps={
  getUser,
  uploadUserImage,
  deleteUser
}

export const enhancer = connect(mapStateToProps, mapDispatchToProps);