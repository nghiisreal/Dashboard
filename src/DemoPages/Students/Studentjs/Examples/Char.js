import React from 'react';
import {Bar} from 'react-chartjs-2';
// import Select from 'react-select';
const data ={
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 0.5,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)', 
            hoverBorderColor: 'rgba(255,99,132,1)',
            borderCapStyle: 'round',
            data: [3.5, 7, 5, 7.5, 7.6]
        },
    ]
};
// {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//         {
//             backgroundColor: 'rgba(255,99,132,0.2)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 0.5,
//             hoverBackgroundColor: 'rgba(255,99,132,0.4)', 
//             hoverBorderColor: 'rgba(255,99,132,1)',
//             borderCapStyle: 'round',
//             data: [3.5, 7, 5, 7.5, 7.6]
//         }
//     ]
// }


class BarExample extends React.Component {
   
    render() {
        return (
            <div>
                
                    <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
               
            </div>
        )
    }
}

export default BarExample;