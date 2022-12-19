const React = require('react');
const Default = require('./Default.jsx');
const Card = require("./Card.jsx")

class Show extends React.Component{
    render(){
        const { item } = this.props;
        return(
            <>
                <Default title="Show Page">
                    <Card item={item}/>
                </Default>
            </>
        )
    }
}

module.exports = Show;