
function Card(props){


    const handleClick = ()=>{
        props.onClick(props.id_loc);
    };


    return (
        
        <div className="container">
        <div className="card" style= {{width: "18rem", height:"20rem"}} onClick={handleClick}>
        <img className="card-img-top" src={props.image} alt={props.nombre} style= {{width: "18rem", height:"10rem"}} />
            
        </div>
        </div>


);
}

export default Card;