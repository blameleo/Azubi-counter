import Heading from "./Heading";
import Main from "./Main";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="rounded-lg mt-32 mx-auto   bg-white shadow-lg w-6/12 p-5 pb-36">
          <Heading />
          <Main />
        </div>
      </div>
    );
  }
}
