import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
}

export default App;
