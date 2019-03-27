import React from "react";

const UserContext = React.createContext();

class UserProvider extends React.Component {
    state = {
        firstName: "Jeremy",
        lastName: "Hopkins",
        avatar: "https://robohash.org/hahaha?set=set4",
        updateUser: (user) => this.updateUser(user),
    }

    updateUser = (user) => {
        this.setState({ ...user });
    }

    render() {
        return (
            <UserContext.Provider value={this.state} >
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

const withUser = (Component) => {
    return (props) => (
        <UserContext.Consumer>
            {(user) => <Component { ...props }  user={user} />}
        </UserContext.Consumer>
    )
}


export { withUser, UserProvider };