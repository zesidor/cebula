import { Chart } from 'react-google-charts';

const ColumnChart = ({kilocebuli}) => {
    
  return (
    <Chart
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Kto", "Kilogramy cebuli", { role: "style" } ],
        ["Płaca minimalna", 541.8, "#bdc3c7"],
        ["Średnia krajowa", 1029.2, "#bdc3c7"],
        ["Ty", kilocebuli, "#FFC312"],
      ]}
      options={{
        hAxis: { title: 'The amount (kg) of sweet, sweet cebula which one can purchase with minimum wage, average salary or  twoja wyplata.', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        legend: 'none',
        chartArea: { left: 60, top: 20, width: '100%', height: '420px' },
      }}
    />
  );
};

export default ColumnChart;