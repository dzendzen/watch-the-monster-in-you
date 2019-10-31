import React from "react";
import axios from "axios";
import DisplayMonster from "./DisplayMonster"

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
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/monsters")
      .then(response => response.data)
      .then(data => {
        this.setState({
          monster: data.monsters[0]
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
        <button type="button" onClick={this.getMonster}>
          Get character
        </button>
      </div>
    );
  }
}

export default Monster;
