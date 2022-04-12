import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Router from "./router/Router";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  const modal = useSelector((state) => state.modalReducer);
  return (
    <div className="App">
      <NavBar />
      <div
        className="static w-full"
        style={{ minHeight: "80vh", marginTop: "5rem" }}
      >
        <Modal state={modal} />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
