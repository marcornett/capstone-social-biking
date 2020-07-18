import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  image:state.user.image,
});

export const enhancer = connect(mapStateToProps);