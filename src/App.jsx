import Game from "./components/Game";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveCasino from "./components/LiveCasino";

function App() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <Game />
        <LiveCasino />
      </div>
    </main>
  );
}

export default App;
