const React = require('react');
const Default = require('./Default.jsx')

class New extends React.Component {
  render() {
    return (
        <>
            <Default title="Edit Page"> 
                <h2>New Item page</h2>

                <form action="/items" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Image: <input type="text" name="image" /><br/>
                    SKU: <input type="text" name="sku" /><br/>
                    Color: <input type="text" name="color" /><br/>
                    Description: <input type="text" name="description" /><br/>
                    Quantity: <input type="text" name="quantity" /><br/>
                    Price: <input type="text" name="price" /><br/>
                    In Stock: <input type="text" name="inStock" /><br/>
                <input type="submit" name="" value="Create Item"/>
                
                </form>
            </Default>
        </>);
    }
  }

module.exports = New;