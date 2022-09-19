import ChartBar from './ChartBar';
import './Chart.css';
import './ChartBar.css';


const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => <ChartBar key = {dataPoint.label} value = {dataPoint.value} label = {dataPoint.label} maxVal = {totalMax} />)}
        </div>
    );
}

export default Chart;