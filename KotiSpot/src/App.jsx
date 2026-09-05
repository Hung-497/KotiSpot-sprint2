import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import DiscoverProperty from "./components/DiscoverProperty"
import Properties from "./components/properties";
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <h3>Search for a house to buy or rent</h3>
          <SearchBar />
        </section>
        <section>
          <h3>Discover properties</h3>
          <DiscoverProperty />
          <Properties />
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;