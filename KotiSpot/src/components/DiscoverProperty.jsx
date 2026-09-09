import { useState } from "react"
import Properties from "./properties"
import { properties } from "../../data";

const DiscoverProperty = ({ favorites, setFavorites }) => {

    const [activeTab, setActiveTab] = useState("recommendations")
    const favoriteProperties = properties.filter((property) =>
        favorites.includes(property.id)
    );
    return (
        <div>
            <h3>Discover properties</h3>
            <div className="discover-property">
                <div className="propertyTabs">
                    <button onClick={() => setActiveTab("recommendations")}>
                        Recommended</button>
                    <button onClick={() => setActiveTab("favorites")}>
                        Favourites</button>
                </div>
                {activeTab === "recommendations" ? (
                    <Properties
                        properties={properties}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                ) : (
                    favoriteProperties.length === 0 ? (
                        <p>No favourite properties yet.</p>
                    ) : (
                        <Properties
                            properties={favoriteProperties}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    )
                )}
            </div>
        </div>
    )
}
export default DiscoverProperty