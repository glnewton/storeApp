const React = require('react');

class Show extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <div>
                <h1>Everything You Don't Need!</h1>
                <h2>{item.name}</h2>
                <img src={item.image + ".jpg"} />
                <h2>{item.sku}</h2>
                <h2>{item.color}</h2>
                <h2>{item.quantity}</h2>
                <h2>{item.inStock}</h2>
                <a href='/items'>Back to Item Inventory</a> 
            </div>
            
        )
    }
}

module.exports = Show;