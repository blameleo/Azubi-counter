import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <div className="rounded-lg  text-center bg-slate-900 text-white py-2 w-64 mx-auto">
          counter - {this.state.count}{" "}
        </div>
        <div className="flex mt-14 justify-center">
          <button
            onClick={() => this.setState({ count: 0 })}
            className="rounded-lg  hover:bg-slate-900 hover:text-white m-3 shadow-lg px-3 py-1"
          >
            Reset
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count + 5 })}
            className="rounded-lg  hover:bg-slate-900 hover:text-white m-3 shadow-lg px-3 py-1"
          >
            Increment
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 5 })}
            className="rounded-lg  hover:bg-slate-900 hover:text-white m-3 shadow-lg px-3 py-1"
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
