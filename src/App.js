import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div
        className="static w-full"
        style={{ minHeight: "80vh", marginTop: "5rem" }}
      >
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
