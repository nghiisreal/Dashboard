import React from "react";
import './List.css';
const List = ({data}) => {
  return (
    <div className="list">
      <table id="tablelist" className=" table mx-auto mt-4">
        <thead className="thead-dark">
          <tr>
            <th className="border">STT</th>
            <th className="border">Name</th>
            <th className="border">Năm sinh</th>
            <th className="border">Số điện thoại</th>
            <th className="border">Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
              {data.map((item)=>(
                  <tr key={item.num}>
                    <td className="border" >{item.num}</td>
                    <td className="border" >{item.name}</td>
                    <td className="border" >{item.day}</td>
                    <td className="border">{item.sdt}</td>
                    <td className="border">{item.address}</td>
                  </tr>
              ))}
            </tbody>
      </table>
    </div>
  );};
export default List;
