import './output.css';
import {useState} from "react";
import './index.css';

function output(props){
    const category = props.category;
    const unit = props.unit;
    const number = props.number;
    const [numberForCalc, setNumberForCalc] = useState(0);
    var differentMeasurements = getMeasurements();

    function getMeasurements(){
        switch(category){
            case "duration":
                return calculateForDuration();
/*            case "length":
                return calculateForLength();
            case "area":
                return calculateForArea();
            case "weight":
                return caculateForWeight();*/
            default:
                return null;
        }
    }

    function calculateForDuration(){
        let mapForCalculation;
        var mapInOneHour = [
            {value: 0.75, label: "european school lessons"},
            {value: 3.2, label: "football games watched on tv"}
        ]
        var mapInOneMinute = [
            {value: 5.4, label: "rounds of sex according to this study: https://pubmed.ncbi.nlm.nih.gov/16422843/"},
            {value: 0.05783, label: "rubik's cubes solved by Yusheng Du at the championship of rubik's cube solving"}
        ]
        switch(unit){
            case "second":
                setNumberForCalc(number /60);
                mapForCalculation = mapInOneMinute;
                break;
            case "minute":
                setNumberForCalc(number);
                mapForCalculation = mapInOneMinute;
                break;
            case "hour":
                setNumberForCalc(number);
                mapForCalculation = mapInOneHour;
                break;
            case "day":
                setNumberForCalc(number * 24);
                mapForCalculation = mapInOneHour;
        }
        return mapForCalculation;
    }

    return{
        <div>
            {differentMeasurements.map(({value, label}, index) => <div className="row"><p>{value * numberForCalc} {label}</p></div>)}
        </div>
    }
}