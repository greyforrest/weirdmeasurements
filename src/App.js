import './App.css';
import {useState} from "react";

function App() {
    const [category, setCategory] = useState();
    const [unit, setUnit] = useState("");
    var optionsForUnitSelect = getCorrectUnitList();

    function getCorrectUnitList(){
        let options;
        switch (category) {
            case "length":
                options = [
                    {value: 'kilometer', label: 'kilometer'},
                    {value: 'centimeter', label: 'centimeter'},
                    {value: 'mile', label: 'mile'},
                    {value: 'foot', label:'foot'},
                ];
                break;
            case "duration":
                options = [
                    {value: 'day', label: 'day'},
                    {value: 'hour', label: 'hour'},
                    {value: 'minute', label: 'minute'},
                    {value: 'second', label:'second'},
                ];
                break;
            case "area":
                options = [
                    {value: 'squarefoot', label: 'square foot'},
                    {value: 'squaremeter', label:'square meter'},
                ];
                break;
            case "weight":
                options = [
                    {value: 'pound', label: 'pound'},
                    {value: 'ounce', label: 'ounce'},
                    {value: 'kilogramm', label: 'kilogramm'},
                    {value: 'gramm', label:'gramm'},
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

    return (
        <div className="App">
            <form>
                <label htmlFor="category">Choose the category:</label>
                <select name="category" id="category" value={category} onChange={handleChangeCategory}>
                    <option value="length">length</option>
                    <option value="duration">duration</option>
                    <option value="area">area</option>
                    <option value="weight">weight</option>
                </select>
                <label htmlFor="unit">Select unit according to category:</label>
                <select name="unit" id="unit" value={unit} onChange={handleChangeMeasurement}>
                    {optionsForUnitSelect.map(({value, label}, index) => <option value={value}>{label}</option>)}
                </select>
            </form>
        </div>
    );
}

export default App;
