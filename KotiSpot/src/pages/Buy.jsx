import Properties from "../components/properties";
import { properties } from "../../data";
import PropertySearch from "../components/PropertySearch";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

const Buy = ({ favorites, setFavorites }) => {
    const propertiesForSale = properties.filter((property) => property.listingType === "sale");
  const [visibleProperties, setVisibleProperties] = useState(propertiesForSale);

    return (
    <div className="min-h-screen bg-[#f8faf9]">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-7">
          <h1 className="text-3xl font-bold text-[#08243f]">
            Find a home to buy
          </h1>

          <p className="mt-2 text-gray-500">
            Search properties for sale across Finland.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

          <p className="mb-3 text-sm font-medium text-[#08243f]">Search for a house to buy</p>
          <PropertySearch
            properties={propertiesForSale}
            onResults={setVisibleProperties}
            placeholder="Search city, neighborhood or postal code"
          />
        </div>

        <div className="mb-6">

          <div className="flex items-end justify-between">

            <div>
              <h2 className="text-2xl font-bold text-[#08243f]">
                Discover properties
              </h2>
            </div>

            <p className="text-sm text-gray-400">
              {visibleProperties.length} properties
            </p>

          </div>

          <div className="mt-5 flex items-center gap-3">

            <button
              className="
                flex items-center gap-2
                rounded-full
                bg-[#17634f]
                px-5 py-2.5
                text-sm font-medium
                text-white
              "
            >
              <Star
                size={16}
                fill="currentColor"
              />

              Recommendations
            </button>

            <button
              className="
                flex items-center gap-2
                rounded-full
                bg-[#eef6f2]
                px-5 py-2.5
                text-sm font-medium
                text-[#08243f]
                transition
                hover:bg-[#dfeee7]
              "
            >
              <Heart size={18} />

              Favorites
            </button>

          </div>
        </div>

        <div>
          <Properties
            properties={visibleProperties}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </div>

      </div>
    </div>
  );
};

export default Buy;

