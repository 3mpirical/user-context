import React from "react";
import { withUser } from "../provider/UserProvider";

class UserEdit extends React.Component {
    state = { ...this.props.user }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.user.updateUser(this.state);
        this.props.history.push("/user");
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return (
            <div className="user-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Account Information</h2>
                    <input 
                        required
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <input 
                        required
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <input 
                        required
                        type="text"
                        placeholder="Avatar URL"
                        name="avatar"
                        value={this.state.avatar}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="btn"> Update </button>
                </form>
            </div>
        )
    }
}


const UserEditWithUser = withUser(UserEdit);
export { UserEditWithUser };