import { connect } from "react-redux";
import { getUser, uploadUserImage, deleteUser } from "../../redux/actions/user"

const mapStateToProps = (state) => ({
  image:state.user.image,
  accountName:state.user.username,
  email:state.user.email,
});

const mapDispatchToProps={
  getUser,
  uploadUserImage,
  deleteUser
}

export const enhancer = connect(mapStateToProps, mapDispatchToProps);