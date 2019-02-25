import React, { Component } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbarr";
import TourList from "./components/TourList/TourList";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
