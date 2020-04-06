import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";
class Gallery extends Component {
  state = {
    styles: [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth"
    ],
    counter: 0
  };

  render() {
    let counter = -1;
    const photos = this.props.photos;
    const images = photos.map((photo, index) => {
      const picture = photo.fields.photos.map(picture => {
        ++counter;
        if (counter === this.state.styles.length) {
          counter = 0;
        }

        return (
          <Item
            styleNumber={this.state.styles[counter]}
            img={picture.fields.file.url}
          />
        );
      });
      return picture;
    });
    return <div class="gallery" id="gallery" >{images}</div>;
  }
}

export default Gallery;
