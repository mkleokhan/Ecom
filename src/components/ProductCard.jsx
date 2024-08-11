const ProdcutCard = (props) => {
    return ( 
        <>
        
        <h2 onClick={props.clickHandler}>{props.title}</h2>
        <h3>{props.description}</h3>
        <img src={props.imageUrl} alt={props.title} />
        </>
     );
}
 
export default ProdcutCard;