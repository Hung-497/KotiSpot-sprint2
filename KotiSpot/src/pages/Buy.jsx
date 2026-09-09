import Properties from "../components/properties";
import { properties } from "../../data";

const Buy = ({ favorites, setFavorites }) => {
    const propertiesForSale = properties.filter((property) => property.listingType === "sale");

    return (
        <div>
            <h1>Properties for sale</h1>
            <Properties
                properties={propertiesForSale}
                favorites={favorites}
                setFavorites={setFavorites}
            />
        </div>
    );
};

export default Buy;