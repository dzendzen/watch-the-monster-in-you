import React from "react";
import axios from "axios";
import DisplayMovie from "./DisplayMovie"

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
    this.getMovie =this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }


  getMovie() {   
    let idRandom = Number(Math.floor(Math.random() * 82));

  getMonster() {   
    let idRandom = Number(Math.floor(Math.random() * 20));

     axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        this.setState({
          movie: data.movies[idRandom]
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.movie ? (
          <DisplayMovie movie={this.state.movie} />
        ) : (
          <p> No data </p>
        )}


        <button type="button" onClick={this.getMovie}>
          Get character
        </button>

      </div>
    );
  }
}

export default Movie;
