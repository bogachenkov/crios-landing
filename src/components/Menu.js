import React, { Component } from 'react';

class Menu extends Component {

  state = {
    isActive: false
  }

  menuClickHandler = e => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {

    const {isActive} = this.state;

    return (
      <div className="menu">
        <button onClick={this.menuClickHandler} className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    );
  }
}

export default Menu;