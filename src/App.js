import Header from "./components/Layout/Header";
import About from "./components/Layout/About";
import "./assets/sass/variables.scss";
import Features from "./components/Layout/Features";
import { Fragment } from "react";
import Tours from "./components/Layout/Tours";
import Review from "./components/Layout/Review";
import Form from "./components/Layout/Form";
import Footer from "./components/Layout/Footer";
import Popup from "./components/Layout/Popup";
import Navbar from "./components/Layout/Navbar";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Tours />
      <Review />
      <Form />
      <Footer />
      <Popup />
    </Fragment>
  );
}

export default App;
