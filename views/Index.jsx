const React = require("react");
const Default = require("./Default");
const Card = require("./partials/Card");

class Index extends React.Component {
  render() {
    return (
      <Default title={"Inventory Page"}>
        <div className="inventoryPage">
          {this.props.items.map((item, x) => {
            return (
              <div className="inventoryItem">
                <Card item={item} />
              </div>
            );
          })}
          <br />
          <button className="btn add-new-item-button">
            <a href={`/items/new`}>Add New Item</a>
          </button>
        </div>
      </Default>
    );
  }
}
module.exports = Index;
