import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
import "./App.css";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        rating={item.stats.rating}
        info={item.stats.info}
        intro={item.intro}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">{cards}</div>
    </div>
  );
}
