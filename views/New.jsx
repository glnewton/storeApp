const React = require("react");
const Default = require("./Default.jsx");
const NewForm = require("./NewForm.jsx");

const addNewItemPageStyle = {
  backgroundColor: "lightgrey",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "22vw",
  height: "auto",
  borderRadius: "10px",
};

class New extends React.Component {
  render() {
    return (
      <Default title="Add New Item Page">
        <div className="editPage" style={addNewItemPageStyle}>
          <NewForm />
        </div>
      </Default>
    );
  }
}

module.exports = New;
