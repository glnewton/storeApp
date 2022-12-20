const React = require('react');
const Default = require('./Default.jsx');
const Card = require("./partials/Card.jsx")

class Show extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <Default title="Show Page">
                <div className="showItemPage">
                    <Card item={item}/>
                </div>
            </Default>  
        )
    }
}

module.exports = Show;