const React = require('react');

const addNewItemFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const inputStyle = {
    display: 'flex',
}

class NewForm extends React.Component{
    render(){
        const { item } = this.props;
        return(
                <div className='addNewItemForm' style={addNewItemFormStyle}>
                    <h3>Add New Item Form</h3>
                    <h5>Add New Item Details Below</h5>
                    <form action="/items/create" method="POST">
                        Name: <input type="text" name="name" /><br/>
                        Image: <input type="text" name="image" /><br/>
                        SKU: <input type="text" name="sku" /><br/>
                        Color: <input type="text" name="color" /><br/>
                        Description: <input type="text" name="description" /><br/>
                        Quantity: <input type="text" name="quantity" /><br/>
                        Price: <input type="text" name="price" /><br/>
                        In Stock: <input type="text" name="inStock" /><br/>
                        <input style={inputStyle} type="submit" name="" value="Create Item"/>
                    </form>
                </div>
        );
    }
}       
module.exports = NewForm;