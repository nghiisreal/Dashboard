import List from "../Lists/List";
import {info} from "../List";
import {useState} from 'react';
const Search=()=>{
    const [query,setQuery]=useState('');
    const search=(data)=> {
        return data.filter((item)=>item.name.toLowerCase().includes(query));
    }
    return(
        <div className="search">
            <input type="text" placeholder="tim kiem" onChange={event=>setQuery(event.target.value)}></input>
            <List data={search(info)}/>
        </div>
    )
}
export default Search;