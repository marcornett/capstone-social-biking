import { connect } from "react-redux";
import {
  getUser,
  uploadUserImage,
  deleteUser
}from "../../redux/actions/user"


const mapStateToProps = (state) => ({
  username: state.user.username,
  password:state.user.password,
  email:state.user.email,
  groups:state.user.groups,
  image:state.user.image,
});

const mapDispatchToProps = {
  getUser,
  uploadUserImage,
  deleteUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);