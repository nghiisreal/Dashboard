import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Line, ResponsiveContainer, LineChart } from "recharts";
import { data1 } from "./list";

const data2 = [
  { name: "Page A", uv: 3.5, pv: 3.5, amt: 1240 },
  { name: "Page B", uv: 7, pv: 7, amt: 3221 },
  { name: "Page C", uv: 5, pv: 5, amt: 5229 },
  { name: "Page D", uv: 7.5, pv: 7.5, amt: 3200 },
  { name: "Page E", uv: 7.6, pv: 7.6, amt: 6218 },
];
const Select = () => {
  const [select, setSelect] = useState();
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
      <div class="divider mt-4"></div>
      <div className="widget-chart-wrapper chart-wrapper-relative">
        <ResponsiveContainer height={300} width="95%" aspect={3.0 / 1.5}>
        
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
            <div className="Barchart-main" style={{ width: "90%" }}>
              <ResponsiveContainer height={300}>
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
              </ResponsiveContainer>
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
