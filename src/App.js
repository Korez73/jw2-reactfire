/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";
import './App.css';

const photos = [
  'https://picsum.photos/id/1001/200/200', 
  'https://picsum.photos/id/1002/200/200', 
  'https://picsum.photos/id/1003/200/200', 
  'https://picsum.photos/id/1004/200/200', 
  'https://picsum.photos/id/1005/200/200', 
  'https://picsum.photos/id/1006/200/200'
]

function App() {
  const [inputs, setInputs] = useState({ title: null, file: null, path: null});
  const [items, setItems] = useState(photos); //use state returns an array of the "state" we pass in, and a function to manipulate it
  const [isCollapsed, collapse] = useState(false);
  const handleOnChange = (e) => {
    if(e.target.name === 'file') {
      setInputs({...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])}) 
    } else {
      setInputs({...inputs, title: e.target.value} )
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setItems([inputs.path, ...items]) 
  }
  const toggle = () => {
    collapse(!isCollapsed);
  }
  return (
    <>
    <Navbar />
    <div className="container text-center mt-5">
      <button className="btn btn-success float-end" onClick={toggle}>{isCollapsed ? 'Close' : '+ Add'}</button>
      <div className="clearfix mb-4"></div>
      <UploadForm 
        isVisible={isCollapsed} 
        onChange={handleOnChange} 
        onSubmit={handleOnSubmit}
      />
      <h1>Gallery</h1>
      <div className="row">
        {items.map((photo, index) => <Card key={index} src={photo}/>)}
      </div>
    </div>
    </>
  );
}

export default App;
