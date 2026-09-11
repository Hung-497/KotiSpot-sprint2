import SearchBar from "../components/SearchBar";
import DiscoverProperty from "../components/DiscoverProperty"
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