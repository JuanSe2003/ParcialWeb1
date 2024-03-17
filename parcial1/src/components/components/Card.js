function Card(props) {
    const handleClick = () => {
        props.onClick(props.id_loc);
    };

    return (
        <img 
            className="card img-fluid" 
            src={props.image} 
            alt={props.nombre} 
            style={{ height: "20rem" }} 
            onClick={handleClick} 
        />
    );
}

export default Card;
