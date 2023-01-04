const React = require('react');


class EditForm extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <div className='editItemForm'>
                <h3>Edit Form</h3>
                <h5>Edit Item Details Below</h5>
                <form action={`/items/${item._id}/update?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={item.name}/><br/>
                    Image: <input type="text" name="image"  defaultValue={item.image}/><br/>
                    SKU: <input type="text" name="sku"  defaultValue={item.sku}/><br/>
                    Color: <input type="text" name="color"  defaultValue={item.color}/><br/>
                    Description: <input type="text" name="description"  defaultValue={item.description}/><br/>
                    Quantity: <input type="text" name="quantity"  defaultValue={item.quantity}/><br/>
                    Price: <input type="text" name="price"  defaultValue={item.price}/><br/>
                    {/* In Stock:{ item.inStock? <input type="checkbox" name="inStock" defaultChecked />: <input type="checkbox" name="inStock"/> }<br/> */}
                    <input type="submit" value="Submit Changes"/>
                </form>         
            </div>
        );
    }
}       
module.exports = EditForm;