import Bonus from "./components/Bonus";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveCasino from "./components/LiveCasino";
import Review from "./components/Review";

function App() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <Game />
        <LiveCasino />
        <Bonus />
        <Review />
        <Footer />
      </div>
    </main>
  );
}

export default App;
