import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [category, setCategory] = useState("")
    const [measurement, setMeasurement] = useState("")

  function handleChangeCategory(event){
      setCategory(event.target.value)
  }

  function handleChangeMeasurement(event){
      setMeasurement(event.target.value)
  }

  return (
    <div className="App">
      <form>
        <label form="category">Choose the category:</label>
        <select name="category" id="category" value={category} onChange={handleChangeCategory}>
          <option value="length">length</option>
          <option value="duration">duration</option>
          <option value="area">area</option>
        </select>
          <label form="measurement">Select measurement according to category:</label>
          <select name="measurement" id="measurement" value={measurement} onChange={handleChangeMeasurement}>
              <option value="length">length</option>
              <option value="duration">duration</option>
              <option value="area">area</option>
          </select>
      </form>
    </div>
  );
}

export default App;
