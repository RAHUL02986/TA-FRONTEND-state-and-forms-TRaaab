import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerText: '',
      fontSize: '50',
    };
  }
  handleChange = (event) => {
    this.setState({
      innerText: event.target.value,
    });
  };
  SizeChangeBySlider = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };

  render() {
    let styles = [
      'Hurricane',
      'Inspiration',
      'Lato',
      'Montserrat',
      'Opensans',
      'Oswald',
      'Palette',
      'Poppins',
      'Red',
      'Roboto',
      'Condensed',
      'Source',
    ];

    return (
      <>
        <main>
          <h1>😎Font-Tester😉</h1>
          <div className="header">
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Type Somthing..."
            />
            <input
              onChange={this.SizeChangeBySlider}
              type="range"
              min={10}
              max={30}
              value={20}
            />
          </div>
          <div className="grid">
            {styles.map((style, i) => (
              <div key={i} className="box">
                <h2>{style}</h2>
                <p className="style" style={{ fontSize: this.state.fontSize }}>
                  {this.state.innerText}
                </p>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default App;
