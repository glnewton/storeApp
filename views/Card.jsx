const React = require("react");

const itemCardStyle = {
  backgroundColor: "#25B5AF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginBottom: "20px",
  border: "1px solid black",
  borderRadius: "10px",
};

const imgStyle = {
  width: "15vw",
  height: "auto",
};

const backButtonStyle = {
  backgroundColor: "blue",
  color: "white",
  border: "none",
  borderRadius: "5px",
  margin: "3px",
  marginBottom: "6px"
};

const editButtonStyle = {
  backgroundColor: "yellow",
  color: "white",
  border: "none",
  borderRadius: "5px",
  margin: "3px"
};

const deleteButtonStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "5px",
  margin: "3px"
};

const buyButtonStyle = {
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  margin: "3px",
  marginTop: "6px"
};

class Card extends React.Component {
  render() {
    const { item } = this.props;
    return (
      
        <div className="itemCard" style={itemCardStyle}>
          <h3>
            {item.name.substring(0, 1).toUpperCase() + item.name.substring(1)}
          </h3>
          <br />
          <a href={`/items/${item.id}`}>
            <img src={item.image} style={imgStyle} />
          </a>
          <br />
          SKU: {item.sku}
          <br />
          Color: {item.color}
          <br />
          Description: {item.description}
          <br />
          Quantity: {item.quantity}
          <br />
          Price: ${item.price}
          <br />
          In Stock: {item.inStock ? `Yes` : `No`}
          <br />
          {item.quantity > 0 ? (
            //<button><a href={``}>Buy</a></button>
            <form action={`/items/${item.id}/update?_method=PUT`} method="POST">
              <input
                style={buyButtonStyle}
                type="submit"
                name="quantity"
                value="BUY"
              />
            </form>
          ) : (
            `OUT OF STOCK`
          )}
          <button className="edit-button" style={editButtonStyle}>
            <a href={`/items/${item.id}/edit`}>Edit</a>
          </button>
          <form
            action={`/items/${item.id}/delete?_method=DELETE`}
            method="POST"
          >
            <input style={deleteButtonStyle} type="submit" value="DELETE" />
          </form>
          <button className="back-button" style={backButtonStyle}>
            <a href="/items">Back to Inventory</a>
          </button>
        </div>
      
    );
  }
}
module.exports = Card;
