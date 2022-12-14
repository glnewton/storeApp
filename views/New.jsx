const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Item page</h1>

            <form action="/items" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image: <input type="text" name="image" /><br/>
              SKU: <input type="text" name="sku" /><br/>
              Color: <input type="text" name="color" /><br/>
              Quantity: <input type="text" name="quantity" /><br/>
              In Stock: <input type="boolean" name="inStock" /><br/>

            <input type="submit" name="" value="Create Item"/>
            
            </form>

        </div>);
    }
  }

module.exports = New;