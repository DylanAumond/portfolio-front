import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Router className="mt-20" />
        <Footer />
      </>
    </div>
  );
}

export default App;
