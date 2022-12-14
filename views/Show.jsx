const React = require('react');
const Default = require('./Default.jsx');
class Show extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <>
                <Default title="Show Page">
                    <section>
                        <h2>Everything You Don't Need!</h2>
                        <h3>{item.name}</h3>
                        <img src={item.image + ".jpg"}/>
                        <h3>SKU: {item.sku}</h3>
                        <h3>Color: {item.color}</h3>
                        <h3>Description: {item.description}</h3>
                        <h3>Quantity: {item.quantity}</h3>
                        <h3>Price: ${item.price}</h3>
                        <h3>Available: {item.inStock}</h3>
                        <a href='/items'>Back to Item Inventory</a><br/>
                        <button>
                            <a href={``}>Buy</a>
                        </button>
                        <button>
                            <a href={`/items/${item.id}/edit`}>Edit</a>
                        </button>
                        

                        <form action={`/items/${item.id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE"/>
                        </form> 
                    </section>

                </Default>
            </>
        )
    }
}

module.exports = Show;