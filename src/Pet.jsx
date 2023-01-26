import { Link } from "react-router-dom";
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  //Link IS THE SAME AS a tag but doesnt reloading the page to===href
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1> {name} </h1>{" "}
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
    // <div>
    //   <h1>{name}</h1>
    //   <h2>{animal}</h2>
    //   <h2>{breed}</h2>
    // </div>
  );
};
export default Pet;
