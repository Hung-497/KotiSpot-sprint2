import Properties from "../components/properties";
import { properties } from "../../data";
const Rent = ( {favorites, setFavorites} ) => {
    const forRentProperties = properties.filter((property) => property.listingType === "rent")

    return (
        <div>
            <h1>Rent</h1>
            <Properties
                properties={forRentProperties}
                favorites={favorites}
                setFavorites={setFavorites}
            />
        </div>
    );
};

export default Rent;