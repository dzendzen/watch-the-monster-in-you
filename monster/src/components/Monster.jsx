import React from "react";
import axios from "axios";
import DisplayMonster from "./DisplayMonster";


class Monster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: null
    };
    this.getMonster =this.getMonster.bind(this);
  }

  componentDidMount() {
    this.getMonster();
  }

  getMonster() {   
    let idRandom = Number(Math.floor(Math.random() * 20));
     axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/monsters")
      .then(response => response.data)
      .then(data => {
        this.setState({
          monster: data.monsters[idRandom]
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.monster ? (
          <DisplayMonster monster={this.state.monster} />
        ) : (
          <p> No data </p>
        )}
      </div>
    );
  }
}

export default Monster;
