import './App.css';
import Output from './Output';
import {useState} from "react";
import './index.css';

function App() {
    const [category, setCategory] = useState();
    const [unit, setUnit] = useState();
    const [inputNumber, setInputNumber] = useState();
    const [showOutput, setShowOutput] = useState(false);
    var optionsForUnitSelect = getCorrectUnitList();

    function getCorrectUnitList() {
        let options;
        switch (category) {
            case "length":
                options = [
                    {value: 'kilometer', label: 'kilometer'},
                    {value: 'centimeter', label: 'centimeter'},
                    {value: 'mile', label: 'mile'},
                    {value: 'foot', label: 'foot'},
                ];
                break;
            case "duration":
                options = [
                    {value: 'day', label: 'day'},
                    {value: 'hour', label: 'hour'},
                    {value: 'minute', label: 'minute'},
                    {value: 'second', label: 'second'},
                ];
                break;
            case "area":
                options = [
                    {value: 'squarefoot', label: 'square foot'},
                    {value: 'squaremeter', label: 'square meter'},
                ];
                break;
            case "weight":
                options = [
                    {value: 'pound', label: 'pound'},
                    {value: 'ounce', label: 'ounce'},
                    {value: 'kilogramm', label: 'kilogramm'},
                    {value: 'gramm', label: 'gramm'},
                ];
                break;
            default:
                options = [
                    {value: '', label: ''},
                ];
        }
        return options;
    }

    function handleChangeCategory(event) {
        setCategory(event.target.value);
    }

    function handleChangeMeasurement(event) {
        setUnit(event.target.value);
    }

    function handleChangeInputNumber(event){
        setInputNumber(event.target.value);
    }

    function outputMeasurements(){
        setShowOutput(true);
    }

    return (
        <div className="App">
            <form>
                <div className="row ml-4">
                    <label htmlFor="category">Choose the category:</label>
                    <select name="category" id="category" value={category} onChange={handleChangeCategory}
                            className="selectpicker" data-style="btn-info">
                        <option value="length">length</option>
                        <option value="duration">duration</option>
                        <option value="area">area</option>
                        <option value="weight">weight</option>
                    </select>
                </div>
                <div className="row ml-4">
                    <label htmlFor="unit">Select unit according to category:</label>
                    <select name="unit" id="unit" value={unit} onChange={handleChangeMeasurement}>
                        {optionsForUnitSelect.map(({value, label}, index) => <option value={value}>{label}</option>)}
                    </select>
                </div>
                <div className="row ml-4">
                    <label htmlFor="inputNumber">number for unit:</label>
                    <input type="number" id="inputNumber" name="inputNumber" onChange={handleChangeInputNumber}/>
                    <button onClick={outputMeasurements}>Show me weird measurements!</button>
                </div>
            </form>
            {showOutput ? <Output unit={unit} category={category} number={inputNumber} /> : null}
        </div>
    )
}

export default App;
