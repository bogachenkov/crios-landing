import React, { Component } from 'react';
import searchIcon from '../images/search.png';

class Search extends Component {

  state = {
    isActive: false,
    value: ''
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    })
  }

  toggleInputWidth = e => {
    this.setState({
      isActive: !this.state.isActive
    }, () => {
      if (this.state.isActive) this.field.focus();
    });
  }

  submitHandler = e => {
    e.preventDefault();
  }

  render() {

    const {isActive, value} = this.state;

    return (
      <form className={`search ${isActive ? 'is-active' : ''}`} onSubmit={this.submitHandler}>
        <input
          className="search__field"
          type="text" value={value}
          onChange={this.changeHandler}
          onBlur={this.toggleInputWidth}
          ref={elem => this.field = elem}
          placeholder="Type to search..." />
        <img onClick={this.toggleInputWidth} className="search__icon" src={searchIcon} alt="Search" />
      </form>
    );
  }
}

export default Search;