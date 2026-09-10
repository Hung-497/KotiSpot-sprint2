import { useLocation } from "react-router-dom";

const PropertyInfo = ({ property, favorites, setFavorites }) => {
  const location = useLocation();
  const selectedProperty = property || location.state?.property;

  if (!selectedProperty) {
    return <p>Property information is unavailable.</p>;
  }

  const isFavorite = favorites.includes(selectedProperty.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== selectedProperty.id));
    } else {
      setFavorites([...favorites, selectedProperty.id]);
    }
  };

  const contactSeller = () => {
    console.log('You pressed the "contact seller or agent" button');
  };

  return (
    <div className="property-info">
      <img
        className="property-details-image"
        src={selectedProperty.image}
        alt={selectedProperty.title}
      />
      <h1>{selectedProperty.title}</h1>

      <p>{selectedProperty.description}</p>

      <h2>
        {selectedProperty.price} {selectedProperty.currency}
      </h2>

      <p>{selectedProperty.city}</p>
      <p>{selectedProperty.address}</p>

      <button type="button" className="favorite-button" onClick={toggleFavorite}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
      <button type="button" onClick={contactSeller}>
        Contact seller or agent
      </button>

      <div>
        <span>{selectedProperty.rooms} rooms</span>
        <span>{selectedProperty.bedrooms} bedrooms</span>
        <span>{selectedProperty.bathrooms} bathrooms</span>
        <span>{selectedProperty.size} m²</span>
      </div>

      <h3>Features</h3>

      <ul>
        {selectedProperty.features.balcony && <li>Balcony</li>}
        {selectedProperty.features.elevator && <li>Elevator</li>}
        {selectedProperty.features.parking && <li>Parking</li>}
        {selectedProperty.features.furnished && <li>Furnished</li>}
        {selectedProperty.features.petsAllowed && <li>Pets allowed</li>}
        {selectedProperty.features.sauna && <li>Sauna</li>}
      </ul>
    </div>
  );
};

export default PropertyInfo;