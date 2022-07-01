import { useState } from "react";
// import Bars from "chart.js";
// import Select from 'react';
// import Bars from './Char'
import {Bar} from 'react-chartjs-2';

import {
    Line,
    ResponsiveContainer,
    LineChart,
  } from "recharts";
  
const data =[
    {
    key:1,
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
        }
    ]
},
{
    key:2,
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 0.5,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)', 
            hoverBorderColor: 'rgba(255,99,132,1)',
            borderCapStyle: 'round',
            data: [1, 1, 1, 1, 1]
        }
    ]
},
]
const data2 = [
    { name: "Page A", uv: 3.5, pv: 3.5, amt: 1240 },
    { name: "Page B", uv: 7, pv: 7, amt: 3221 },
    { name: "Page C", uv: 5, pv: 5, amt: 5229 },
    { name: "Page D", uv: 7.5, pv: 7.5, amt: 3200 },
    { name: "Page E", uv: 7.6, pv: 7.6, amt: 6218 },
  ];
const Select=()=>{
    const [selects,setSelects]=useState(data);
    console.log(selects);
    return(
        <div>
            {data.map(item=>(
                <div>
                <div className="widget-chart-content d-flex">
                    <h4 className="result d-inline-block">Kết quả học tập</h4>
                    <select id="selectyear" onChange={(e)=>{setSelects(e.target.value)}}>
                      <option value={item.key=1}>HK1-(2019-20201)</option>
                      <option value={item.key=2}>HK2-(2019-2020)</option>
                      <option>HK1-(2020-2021)</option>
                      <option>Hk2-(2020-2021)</option>
                      <option>HK1-(2021-2022)</option>
                      <option>Hk2-(2021-2022)</option>
                    </select>
                    <div class="divider mt-4"></div>
                  </div>
                  <div className="widget-chart-wrapper chart-wrapper-relative">
                    <ResponsiveContainer
                      height={300}
                      width="95%"
                      aspect={3.0 / 1.5}
                    >
                      <LineChart
                        data={data2}
                        margin={{ top: 40, right: 45, left: 80, bottom: 120 }}
                      >
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#d6b5ff"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="row">
                      <div className=" rorateleft col-1">
                        <p>Điểm TB lớp học phần</p>
                      </div>
                      <div className="col-8">
                        <div className="Barchart-main" style={{width:"90%"}}>
                          <ResponsiveContainer height={300}>
                          <Bar
                            data={selects}
                            width={100}
                            height={50}
                            options={{
                        maintainAspectRatio: true
                            }}
                            />
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className=" rorateright col-1">
                        <p>Điểm của bạn</p>
                      </div>
                    </div>
                  </div>
                </div>
        ))}
        
        </div>
        
    )
}
export default Select;