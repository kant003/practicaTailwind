import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
/*
const options={chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }}*/

  const  options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };

  const series=[{
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }]
  


const chart = new ApexCharts(document.querySelector("#chart"), options);



export default function EjApexGraph(){
    chart.render()
    return <Chart
    options={options}
    series={series}
    type="bar"
    width="500"
  />
}

/* Paso uno: ejecuto npm i apexcharts lodash */