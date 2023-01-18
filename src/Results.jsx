import Pet from "./Pet";
import React from "react";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            images={pet.images}
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
