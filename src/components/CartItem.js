
export default function CartItem(props) {
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
      <h2>{props.text}</h2>
    </div>
  );
}