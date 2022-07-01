import { useState } from 'react';
import List from '../List/List';
import './Search.css';
import {peoples} from "../Listuser.js"
const Search=()=>{
    const [query, setQuery] = useState("");
    // console.log(setQuery);
    console.log(query)
    const search=(data)=>{
        return data.filter(item=>item.name.toLowerCase().includes(query)||
        item.sdt.includes(query)|| item.day.includes(query)||
        item.address.toLowerCase().includes(query))
    }
    return(
        <div className="searchlist mt-4" > 
            {/* <input type="text" className="form-control" placeholder="nhập tìm kiếm" onChange={event => setQuery(event.target.value)}></input> */}
            <input id='inputsearch' type="text" className="form-control" placeholder="nhập tìm kiếm" onKeyPress={event => 
                {if(event.key==="Enter"){
                    setQuery(event.target.value)
                }
            }} onBlur={event => setQuery(event.target.value)}></input>
            <button id='buttonsearch' type='button' className="pe-7s-search"></button>
            <List data={search(peoples)}/>
        </div>
    )
}
export default Search;