/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <div className="container text-center mt-5">
      <h1>Gallery</h1>
      <div className="row">
        {Array.apply(null, {length: 9}).map(() => <Card />)}
      </div>
    </div>
    </>
  );
}

export default App;
