import React, { Fragment } from "react";
import { withUser } from "../provider/UserProvider";
import { withLakes } from "../provider/LakeProvider";
import { NewLakeFormWithLake } from "./NewLakeForm";

class UserShow extends React.Component {

    renderLakes = () => {
       return this.props.lakes.map((lake, index) => (
            <Fragment key={index}>
                <div key={lake.id} className="lake">
                    <div className="lake-content">
                        <h2>{lake.name}</h2>
                        <p>Altitude: { lake.altitude }</p>
                    </div>
                    <button className="btn" onClick={() => this.props.deleteLake(lake.id)} > delete </button>
                </div>
                <hr/>
            </Fragment>
        ));
    }

    render(){
        const { user } = this.props;
        return (
            <div className="user-show-container">
                <div className="user-card">
                    <img src={user.avatar} alt=""/>
                    <p>{ user.firstName } { user.lastName }</p>
                </div>
                <div className="lakes-container">
                    <h2 className="lakes-heading">Lakes You Have Visited</h2>
                    { this.renderLakes() }
                    <NewLakeFormWithLake />
                </div>
            </div>
        )
    }
}


const UserShowWithUserAndLakes = withUser(withLakes(UserShow));
export { UserShowWithUserAndLakes };