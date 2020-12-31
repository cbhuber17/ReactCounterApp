import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  //   constructor() {
  //     //  Super must be called to access "this"
  //     super();

  //     // Allow handleIncrement to access "this"
  //     // By default, it would be undefined (refers to the global window object in non strict mode)
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // Arrow notation allows "this" to be accessed without having to use the commented out constructor above
  // Then it would prevent the noise of binding "this" to every new function made.
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // Using bootstrap classes
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
