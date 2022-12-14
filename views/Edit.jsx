const React = require('react');
const Default = require('./Default.jsx')

class Edit extends React.Component {
    render() {
      return (
          <>
            <Default title="Edit Page">      
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
            <form action={`/items/${this.props.item._id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={this.props.item.name}/><br/>
                Image: <input type="text" name="image"  defaultValue={this.props.item.image}/><br/>
                SKU: <input type="text" name="sku"  defaultValue={this.props.item.sku}/><br/>
                Color: <input type="text" name="color"  defaultValue={this.props.item.color}/><br/>
                Quantity: <input type="text" name="quantity"  defaultValue={this.props.item.quantity}/><br/>
                In Stock:
                    { this.props.item.inStock? <input type="checkbox" name="inStock" defaultChecked />: <input type="checkbox" name="inStock"/> }
                <br/>
                <input type="submit" value="Submit Changes"/>
            </form>
            </Default>
          </>
      );
    }
  }
  
  module.exports = Edit;