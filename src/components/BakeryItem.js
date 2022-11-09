// TODO: create a component that displays a single bakery item
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default function BakeryItem(props) {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        margin: "10px",
        marginLeft: "5vw",
        background : "lightblue",
        borderRadius: "25px",
        minWidth: "30vw"
    }}>
      <img src={props.image} alt={props.name} style={{borderRadius: "25px", margin: "10px"}}/>
      <h3 style={{margin: 0}}>{props.name}</h3>
      <p>{props.description}</p>
      <p style={{fontSize: "28px", margin: "2px"}}>${props.price}</p>
      
      <button onClick={props.callback} style={{color: "transparent", backgroundColor: "transparent", borderColor: "transparent"}}>
        <AwesomeButton style={{margin: "15px"}}>Add to Cart</AwesomeButton>
      </button>
    </div>
  );
}