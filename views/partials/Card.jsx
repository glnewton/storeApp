const React = require("react");



class Card extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="itemCard">
        <h3>
          {item.name.substring(0, 1).toUpperCase() + item.name.substring(1)}
        </h3>
        <br />
        <a href={`/items/${item.id}`}>
          <img src={item.image}  />
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
        {/* In Stock: {item.inStock ? `Yes` : `No`} */}
        <br />
        {((item.quantity > 0) && (item.inStock == true)) ? (
          //<button><a href={``}>Buy</a></button>
          <form action={`/items/${item.id}/update?_method=PUT`} method="POST">
            <input
              className="btn buy-button"
              type="submit"
              name="quantity"
              value="BUY"
            />
          </form>
        ) : (
          `OUT OF STOCK`
        )}
        <button className="btn edit-button">
          <a href={`/items/${item.id}/edit`}>Edit</a>
        </button>
        <form action={`/items/${item.id}/delete?_method=DELETE`} method="POST">
          <input
            className="btn delete-button"
            type="submit"
            value="DELETE"
          />
        </form>
        <button className="btn back-button">
          <a href="/items">Back to Inventory</a>
        </button>
      </div>
    );
  }
}
module.exports = Card;
