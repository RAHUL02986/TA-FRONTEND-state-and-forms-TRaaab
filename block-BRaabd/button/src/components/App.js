import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  }
  handleBasketball = () => {
    this.setState({
      image: <img src="./images/basketball.jpg" alt="basketball" />,
    });
  };
  handleCricket = () => {
    this.setState({
      image: <img src="./images/cricket.jpg" alt="Cricket" />,
    });
  };
  handleLaptop = () => {
    this.setState({
      image: <img src="./images/laptop.jpg" alt="Laptop" />,
    });
  };
  handlePhone = () => {
    this.setState({
      image: <img src="./images/phone.jpg" alt="Phone" />,
    });
  };
  handlePubg = () => {
    this.setState({
      image: <img src="./images/pubg.jpeg" alt="Pubg" />,
    });
  };
  handleTiger = () => {
    this.setState({
      image: <img src="./images/tiger.jpg" alt="Tiger" />,
    });
  };

  render() {
    return (
      <center>
        <h1>Diffrent Button For Diffrent Image!</h1>
        <button onClick={this.handleBasketball}>Basketball</button>
        <button onClick={this.handleCricket}>Cricket</button>
        <button onClick={this.handleLaptop}>Laptop</button>
        <button onClick={this.handlePhone}>Phone</button>
        <button onClick={this.handlePubg}>Pubg</button>
        <button onClick={this.handleTiger}>Tiger</button>

        <div>{this.state.image}</div>
      </center>
    );
  }
}

export default App;
