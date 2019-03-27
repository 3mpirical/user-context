import React from "react";
import { withLakes } from "../provider/LakeProvider";



class NewLakeForm extends React.Component {
    state = { name: "", altitude: "" }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createLake(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <div className="lake-form-container">
                <form onSubmit={this.handleSubmit} className="new-lake-form" >
                    <h3>New Lake</h3>
                    <input 
                        required
                        type="text"
                        placeholder="Name Of Lake"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        required
                        type="text"
                        placeholder="Altitude"
                        name="altitude"
                        value={this.state.altitude}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="btn" >Create</button>
                </form>
            </div>
        )
    }
}


const NewLakeFormWithLake = withLakes(NewLakeForm);
export { NewLakeFormWithLake };