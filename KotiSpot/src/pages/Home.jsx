import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import DiscoverProperty from "../components/DiscoverProperty"
import Properties from "../components/properties";
import Footer from "../components/Footer"
function Home({favorites, setFavorites}) {
  return (
    <>
      <main>
        <section className="hero">
          <SearchBar />
        </section>
        <section>
          <DiscoverProperty
            favorites={favorites}
            setFavorites={setFavorites} />
        </section>
      </main>
    </>
  );
}

export default Home;