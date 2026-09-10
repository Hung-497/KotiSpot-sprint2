import { Link } from "react-router-dom";

const Property = ({ property, favorites, setFavorites }) => {
    const isFavorite = favorites.includes(property.id);
    const { image, address, city, price, size } = property;

    return (
        <div className="property-card">

            <Link to="/propertyInfo" state={{ property }}>
                <img
                    className="property-image"
                    src={image}
                    alt="house image"
                />

                <div className="property-info">
                    <div>{address}</div>
                    <div>{city}</div>
                    <div>{price}</div>
                    <div>{size}</div>
                </div>
            </Link>

            <button
                className="favorite-button"
                onClick={() => {
                    if (isFavorite) {
                        setFavorites(
                            favorites.filter((id) => id !== property.id)
                        );
                    } else {
                        setFavorites([
                            ...favorites,
                            property.id
                        ]);
                    }
                }}
            >
                {isFavorite ? "♥" : "♡"}
            </button>

        </div>
    );
};

export default Property;