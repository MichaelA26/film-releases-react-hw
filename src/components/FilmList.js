import React, { Component } from "react";
import Film from "./Film";

class FilmList extends Component {
  render() {
    const filmItems = this.props.filmItems.map((film) => {
      return (
        <Film name={film.name} key={film.id}>
        {film.url}
        </Film>
      );
    });
    return (
      <div className='film-list'>
      {filmItems}
      </div>
    );
  }
}

export default FilmList;
