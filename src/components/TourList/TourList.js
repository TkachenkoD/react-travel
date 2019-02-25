import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    let tempArrTours = this.state.tours;
    let newArrOfTours = tempArrTours.filter(indTour => {
      return indTour.id !== id;
    });
    this.setState({ tours: newArrOfTours });
  };

  render() {
    const { tours } = this.state;
    return (
      <div className="tourList">
        {tours.map(nestedTour => {
          return (
            <Tour
              passedFunc={this.removeTour}
              passProp={nestedTour}
              key={nestedTour.id}
            />
          );
        })}
      </div>
    );
  }
}
