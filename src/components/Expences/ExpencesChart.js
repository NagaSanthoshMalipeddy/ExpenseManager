import Chart from "../Chart/Chart";
const ExpenceChart = (props) => {

    const datapoints = [
        {label : 'Jan' , value : 0},
        {label : 'Feb' , value : 0},
        {label : 'Mar' , value : 0},
        {label : 'Apr' , value : 0},
        {label : 'May' , value : 0},
        {label : 'Jun' , value : 0},
        {label : 'Jul' , value : 0},
        {label : 'Aug' , value : 0},
        {label : 'Sep' , value : 0},
        {label : 'Oct' , value : 0},
        {label : 'Nov' , value : 0},
        {label : 'Dec' , value : 0}
    ];
    console.log(props.expences);
    for(const expence in props.expences){
        //console.log(props.expences[expence].date.getMonth(),' item');
        let ind = props.expences[expence].date.getMonth();
        datapoints[ind].value += props.expences[expence].amount;
    }

    console.log(datapoints);

    return <Chart datapoints = {datapoints}></Chart>

}

export default ExpenceChart;