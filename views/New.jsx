const React = require("react");
const Default = require("./Default.jsx");
const NewForm = require("./partials/NewForm.jsx");

class New extends React.Component {
  render() {
    return (
      <Default title="Add New Item Page">
        <div className="addNewItemPage">
          <NewForm />
        </div>
      </Default>
    );
  }
}

module.exports = New;
