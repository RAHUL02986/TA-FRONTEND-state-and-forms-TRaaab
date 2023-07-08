import React from 'react';
import data from './data';
import Cards from './cards';
let uniquecategory = [...new Set(data.map((cv) => cv.category))];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: '',
    };
  }
  handleClick = (event) => {
    this.setState({
      activeCategory:
        this.state.activeCategory === event.target.name
          ? null
          : event.target.name,
    });
  };
  render() {
    let alldata;
    if (!this.state.activeCategory) {
      alldata = data;
    }
    if (this.state.activeCategory) {
      alldata = data.filter((eachdish) => {
        return this.state.activeCategory === eachdish.category;
      });
    }

    console.log(alldata);

    return (
      <>
             <center>
             <h1>Our Menu</h1>
            <hr className='headerHr'/>

                </center>    
        <header>
          <nav>
            {uniquecategory.map((category) => {
              return (
                <button
                  key={category}
                  name={category}
                  onClick={this.handleClick}
                  className={
                    this.state.activeCategory === category ? 'active' : ''
                  }
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </header>
        <section className="cardscontainer">
          <Cards cardData={alldata} />
        </section>
      </>
    );
  }
}
export default App;
