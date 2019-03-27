import React from "react";


const LakeContext = React.createContext();

class LakeProvider extends React.Component {
    state = {
        lakes: [
            {name: "Eagles Peak", altitude: "2000 ft", id: Math.random() * Math.random()},
            {name: "Silver Lake", altitude: "1500 ft", id: Math.random() * Math.random()},
            {name: "Kinger's Reservior", altitude: "7000 ft", id: Math.random() * Math.random()},
            {name: "Clearwater", altitude: "200 ft", id: Math.random() * Math.random()},
            {name: "Golden Eye", altitude: "3000 ft", id: Math.random() * Math.random()},
            {name: "White Bottom", altitude: "10500 ft", id: Math.random() * Math.random()},
        ],
        createLake: (lake) => this.createLake(lake),
        updateLake: (lake) => this.updateLake(lake),
        deleteLake: (lake) => this.deleteLake(lake),
    }

    createLake = (lake) => {
        const id = Math.random() * Math.random();
        const newLake = {...lake, id};
        const lakes = [...this.state.lakes, newLake];
        this.setState({ lakes });
    }

    updateLake = (updatedLake) => {
        const lakes = this.state.lakes.map((lake) => {
            if(lake.id === updatedLake.id) return updatedLake;
            return lake;
        });
        this.setState({ lakes });
    }

    deleteLake = (id) => {
        const lakes = this.state.lakes.filter((lake) => id !== lake.id);
        this.setState({ lakes });
    }
    
    render() {
        return (
            <LakeContext.Provider value={this.state}>
                { this.props.children }
            </LakeContext.Provider>
        )
    }
}

const withLakes = (Component) => {
    return (props) => (
        <LakeContext.Consumer>
            { (lakes) =>  <Component {...props} {...lakes} /> }
        </LakeContext.Consumer>
    );
};


export { withLakes, LakeProvider };