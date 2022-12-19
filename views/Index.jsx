const React = require("react");
const Default = require("./Default");
const Card = require("./Card");

const itemCardStyle = {
  backgroundColor: "#25B5AF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginBottom: "20px",
  border: "2px solid black",
};

const imgStyle = {
  width: "15vw",
  height: "auto",
};

const inventoryStyle = {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'

}

const addNewItemButtonStyle = {
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    // margin: "5px",
    marginBottom: "25px"
  };

class Index extends React.Component {
  render() {
    return (
      <Default title={"Store Items Index Page"}>
        <div className="inventory" style={inventoryStyle}>
          {this.props.items.map((item, x) => {
            return (
              <div className="item">
                <Card item={item} />
              </div>
            );
          })}
          <br />
          <button style={addNewItemButtonStyle}>
            <a href={`/items/new`}>Add New Item</a>
          </button>
        </div>
      </Default>
    );
  }
}
module.exports = Index;
