const Property = ({ property, favorites, setFavorites }) => {
    const isFavorite = favorites.includes(property.id);
    const { image, address, location, price, size } = property;
    return (
        <div className="property-card">
            <img className="property-image" src={image} alt="house image"></img>
            <div className="property-info">
                <div>{address}</div>
                <div>{location}</div>
                <div>{price}</div>
                <div>{size}</div>
            </div>
            <button className = "favorite-button"
                onClick={() => {
                    if (isFavorite) {
                        setFavorites(favorites.filter((id) => id !== property.id));
                    } else {
                        setFavorites([...favorites, property.id]);
                    }
                }}
            >
                {isFavorite ? "♥" : "♡"}
            </button>
        </div>
    )
}

export default Property