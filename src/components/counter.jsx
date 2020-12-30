import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  //   constructor() {
  //     //  Super must be called to access "this"
  //     super();

  //     // Allow handleIncrement to access "this"
  //     // By default, it would be undefined (refers to the global window object in non strict mode)
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // Arrow notation allows "this" to be accessed without having to use the commented out constructor above
  // Then it would prevent the noise of binding "this" to every new function made.
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Using bootstrap classes
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
