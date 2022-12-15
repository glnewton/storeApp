const React = require('react');
const Default = require('./Default.jsx')

class Error extends React.Component {
    render() {
        const { error } = this.props;
      return (
          <>
            <Default title="Error Page">
                <h1>{error.status}</h1>
                <h2>{error.message}</h2>
                <h3>{error.stack}</h3>      
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
            </Default>
          </>
      );
    }
  }
  
  module.exports = Error;