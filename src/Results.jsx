import Pet from "./Pet";
import React from "react";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <div className="loading-pane">
          <h2 className="loader">🌀</h2>
        </div>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            images={pet.images}
            id={pet.id}
            location={`${pet.city}, ${pet.state}`}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
