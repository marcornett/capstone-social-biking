import { connect } from "react-redux";
import { registerUser, getUser } from "../../redux/actions/user"
import { login } from "../../redux/actions/auth"

const mapStateToProps = (state) => ({
    user: state.user.username,
    password: state.user.password,
    token: state.user.token
})

const mapDispatchToProps = {
    registerUser,
    getUser,
    login
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);