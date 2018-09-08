import React, { Component } from 'react';
import Navbar from './Navbar';

import '../styles/css/index.css';
import Header from './Header';
import Footer from './Footer';
import Offer from './Offer';
import Boxes from './Boxes';
import Screens from './Screens';
import Response from './Response';
import Loader from './Loader';
import Wrapper from './Wrapper';
import LaptopOnly from './LaptopOnly';

class App extends Component {

  state = {
    isLoading: true,
    width: 0
  }

  componentDidMount() {
   this.updateWindowDimensions();
   window.addEventListener('resize', this.updateWindowDimensions);
   setTimeout(() => this.setState({isLoading: false}), 2000); 
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth});
  }

  componentWillUnmount() {
    window.removeEventListener('reize', this.updateWindowDimensions);  
  }
  
  render() {
    return (
      <div className="App">
        {this.state.width >= 1024 && (
          <Wrapper>
            {this.state.isLoading && <Loader />}
            <Navbar />
            <Header />
            <Offer />
            <Boxes/>
            <Screens />
            <Response />
            <Footer />
          </Wrapper>
        )}
        {(this.state.width < 1024) && <LaptopOnly />}
      </div>
    );
  }
}

export default App;
