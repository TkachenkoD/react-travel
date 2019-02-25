import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  getInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, img, city, name, info } = this.props.passProp;

    const { passedFunc } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img className="img-container" src={img} alt="city" />
          <span className="close-btn" onClick={() => passedFunc(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.getInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p className="info-container">{info}</p>}
        </div>
      </article>
    );
  }
}
