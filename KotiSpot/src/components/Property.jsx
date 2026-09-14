import { Link } from "react-router-dom";

const Property = ({ property, favorites, setFavorites }) => {
    const isFavorite = favorites.includes(property.id);
    const { image, address, city, price, size } = property;

    return (
        <div className="property-card w-52.5 overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
            <div className="relative">

            <Link to="/propertyInfo" state={{ property }}>
                <img
                    src={image}
                    alt="house image"
                    className="h-28.75 w-full object-cover"
                />

                <div className="property-info">
                    <div>{address}</div>
                    <div> ⌖ {city}</div>
                    <div>{price} € </div>
                    <div>{size} m² </div>
                </div>
            </Link>

            <button
                className="favorite-button absolute right-2 top-2"
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

        </div>
    );
};

export default Property;