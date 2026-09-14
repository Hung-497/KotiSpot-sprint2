import DiscoverProperty from "../components/DiscoverProperty";
import { Search, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import realestate from "../assets/realestate.jpg";

const Home = ({ favorites, setFavorites }) => {
  return (
    <main className="bg-white">

      <section
        className="relative h-85 bg-cover bg-center"
        style={{
          backgroundImage: `url(${realestate})`
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/10 to-transparent"></div>

        <div className="relative mx-auto max-w-6xl px-10 pt-10">

          <p className="text-xs font-semibold tracking-[3px] text-[#08243f]">
            FIND YOUR SPOT
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-[#08243f]">
            Search for a house
            <br />
            to buy or rent
          </h1>

          <p className="mt-3 text-sm text-[#294158]">
            Discover your next home in Finland.
          </p>

          <p className="text-sm text-[#294158]">
            Simple. Trusted. For a better tomorrow.
          </p>

        </div>

        <div className="absolute bottom-8 left-1/2 w-130 -translate-x-1/2">

          <div className="flex items-center rounded-full bg-white p-2 shadow-md">

            <Search
              size={18}
              className="ml-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by city, area, or property type..."
              className="
                flex-1
                px-4 py-2
                text-sm
                text-[#08243f]
                outline-none
              "
            />

            <button
              className="
                rounded-full
                bg-[#17634f]
                px-8 py-2.5
                text-sm
                font-medium
                text-white
              "
            >
              Search
            </button>

          </div>
        </div>

      </section>


      <section className="bg-white py-8">

        <div className="mx-auto max-w-6xl px-10">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-bold text-[#08243f]">
              Discover properties
            </h2>

            <Link
              to="/buy"
              className="text-sm text-blue-600 underline"
            >
              View all properties →
            </Link>

          </div>

          <div className="mt-6">
            <DiscoverProperty          
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;