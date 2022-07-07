import { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";
import { data1 } from "./list";
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
Chart.defaults.set('plugins.datalabels', {
    // anchor: 'end',
    align: 'end',
})
const Select = () => {
    const [select, setSelect] = useState(data1[0]);
    const onChangeDropdown = (e) => {
        const selected = e.target.value;
        const selectData = data1.filter((d) => d.key == selected)[0];
        setSelect(selectData);
    };
    useEffect(() => {
        setSelect(data1[0]);
    }, []);
    return (
        <div>
            <h4 className="result d-inline-block">Kết quả học tập</h4>
            <select
                id="selectyear"
                value={select?.id}
                onChange={(e) => {
                    onChangeDropdown(e);
                }}
            >
                {data1.map((d) => (
                    <option key={d.key} value={d.key}>
                        {d.year}
                    </option>
                ))}
            </select>
            <div class="divider mt-2"></div>
            <div className="widget-chart-wrapper chart-wrapper-relative">
                <ResponsiveContainer className="responsive" height={300} width="90%" aspect={3.0 / 1.5}>
                    {select ? (
                        <Line
                            data={select}
                            width={100}
                            height={50}
                            options={{
                                maintainAspectRatio: true,
                            }}
                            plugins = {[ChartDataLabels]}
                        />
                    ) : (
                        ""
                    )}
                </ResponsiveContainer>
                <div className="row">
                    <div className=" rorateleft col-1">
                        <p>Điểm TB lớp học phần</p>
                    </div>
                    <div className="col-8">
                        <div className="Barchart-main" style={{ width: "90%" }}>
                            {/* <ResponsiveContainer height={300}>
                {select ? (
                  <Bar
                    data={select}
                    width={100}
                    height={50}
                    options={{
                      maintainAspectRatio: true,
                    }}
                  />
                ) : (
                  ""
                )}
              </ResponsiveContainer> */}
                        </div>
                    </div>
                    <div className=" rorateright col-1">
                        <p>Điểm của bạn</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
// <div>
//  <div className="widget-chart-content d-flex">

//       <h4 className="result d-inline-block">Kết quả học tập</h4>

//       <select id="selectyear" value={selects} onChange={(e)=>{onChangeDropdown(e)}}>
//         {data1.map((option)=>(
//           <option key={option.key} value={option.key}>{option.year}</option>
//         ))}
//       </select>
//       <div class="divider mt-4"></div>
//     </div>
//     <div className="widget-chart-wrapper chart-wrapper-relative">
//       <ResponsiveContainer
//         height={300}
//         width="95%"
//         aspect={3.0 / 1.5}
//       >
//         <LineChart
//           data={data2}
//           margin={{ top: 40, right: 45, left: 80, bottom: 120 }}
//         >
//           <Line
//             type="monotone"
//             dataKey="pv"
//             stroke="#d6b5ff"
//             strokeWidth={2}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//       <div className="row">
//         <div className=" rorateleft col-1">
//           <p>Điểm TB lớp học phần</p>
//         </div>
//         <div className="col-8">
//           <div className="Barchart-main" style={{width:"90%"}}>
//             <ResponsiveContainer height={300}>
//             <Bar
//             data={selects.data}
//             width={100}
//             height={50}
//             options={{
//         maintainAspectRatio: true
//             }}
//             />
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <div className=" rorateright col-1">
//           <p>Điểm của bạn</p>
//         </div>
//       </div>
//     </div>
// </div>

export default Select;
