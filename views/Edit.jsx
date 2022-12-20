const React = require('react');
const Default = require('./Default.jsx')
const EditForm = require('./partials/EditForm.jsx')

class Edit extends React.Component {
    render() {
      return (
          <Default title="Edit Page">
            <div className='editItemPage'>      
              <EditForm item={this.props.item}/>
            </div>
          </Default>
      );
    }
  }
  
  module.exports = Edit;