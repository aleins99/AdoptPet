import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    console.log(e);
    this.setState({
      // get the index of the image and set to active
      // if x is a string +x is a integer, x= "3" => +x= 3
      active: +e.target.dataset.index,
    });
  }; // arrow functions works better than classic function in Class Copmponent : when invokes a arrow function doesnt create a new scope

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={image}
              src={image}
              alt={"animal thumbnail "}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}
