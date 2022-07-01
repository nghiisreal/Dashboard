const List=({data})=>{
    return(
        <div className="list mt-4">
            <div className="container">
                <div className="row">
                    
                        {data.map((item)=>(
                            <div className="col-4 mb-4">
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={process.env.PUBLIC_URL +'/Img' + item.img} className="card-img-top img-fluid" style={{width:"500px", height:"300px"}} alt="hinh" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.descript}</p>
                                        <p className="card-text">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                    
                </div>
            </div>
        
        
        </div>
    )
}
export default List;