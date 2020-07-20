import { connect } from "react-redux";
import { getUser } from "../../redux/actions/user"

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    getUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);