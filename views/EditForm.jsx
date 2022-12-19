const React = require('react');

const editFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}


const inputStyle = {
    display: 'flex',
}

class EditForm extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <div className='editForm' style={editFormStyle}>
                <h3>Edit Form</h3>
                <h5>Edit Item Details Below</h5>
                <form action={`/items/${this.props.item._id}/update?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.item.name}/><br/>
                    Image: <input type="text" name="image"  defaultValue={this.props.item.image}/><br/>
                    SKU: <input type="text" name="sku"  defaultValue={this.props.item.sku}/><br/>
                    Color: <input type="text" name="color"  defaultValue={this.props.item.color}/><br/>
                    Description: <input type="text" name="description"  defaultValue={this.props.item.description}/><br/>
                    Quantity: <input type="text" name="quantity"  defaultValue={this.props.item.quantity}/><br/>
                    Price: <input type="text" name="price"  defaultValue={this.props.item.price}/><br/>
                    In Stock:{ this.props.item.inStock? <input type="checkbox" name="inStock" defaultChecked />: <input type="checkbox" name="inStock"/> }<br/>
                    <input style={inputStyle} type="submit" value="Submit Changes"/>
                </form>         
            </div>
        );
    }
}       
module.exports = EditForm;