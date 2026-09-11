import { properties } from "../../data";
import Properties from "../components/Properties";

const Favorites = ({ favorites, setFavorites }) => {
    const favoriteProperties = properties.filter((property) =>
        favorites.includes(property.id)
    );

    return (
        <div>
            <h1>Favorites</h1>
            {favoriteProperties.length === 0 ? (
                <p>No favorite properties yet.</p>
            ) : (
                <Properties
                    properties={favoriteProperties}
                    favorites={favorites}
                    setFavorites={setFavorites}
                />
            )}
        </div>
    );
};

export default Favorites;