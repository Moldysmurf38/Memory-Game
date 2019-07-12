import React, {Component} from 'react';
import PageTitle from "./components/title"
import InstructBody from "./components/instructions";
import PhotoGrid from "./components/photogrid";
import ImageCard from "./components/cards";
import images from "./images.json";
import './App.css';

let choiceArray = [];

class App extends Component {

  state = {
    images,
    count: 0,
    total: 0,
  };

 playerChoice = (event,image) => {
  event.preventDefault();
  let userChoice = event.currentTarget.id;
  if (choiceArray.indexOf(userChoice) === -1) {
    console.log("true");
    this.setState({ count: this.state.count + 1 });
    choiceArray.push(userChoice);
  } else {
    console.log("false");
    if (this.state.count > this.state.total) {
      console.log("greater");
      this.setState({total: this.state.count});
      console.log(choiceArray)
      if (choiceArray.length === 12) {
        console.log("You win!")
      }
    }
    choiceArray.length= 0;
    this.setState({count: 0});
  };

  //console.log(choiceArray);
 };

  render() {
    return (
      <div className="App">
        <div className="header">
          <PageTitle />
        </div>
        <div className="score-div">
          <div className="player-score">Your Score: {this.state.count} | High Score: {this.state.total}</div>
        </div>
        <div className="body-div">
          <div className="instruction-div">
            <InstructBody />
          </div>
          <div className="card-div">
            <PhotoGrid>
                {this.state.images.map((image, i ) => (
                  <ImageCard
                    id={image.id}
                    src={image.image}
                    alt={image.name}
                    onClick={this.playerChoice}
                    dataState="unselected"
                    key= {i}
                  />
                ))}
            </PhotoGrid>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
