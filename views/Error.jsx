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
            </Default>
          </>
      );
    }
  }
  
  module.exports = Error;