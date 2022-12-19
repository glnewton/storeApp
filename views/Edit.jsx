const React = require('react');
const Default = require('./Default.jsx')
const EditForm = require('./EditForm.jsx')

const editPageStyle = {
  backgroundColor: 'lightgrey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '22vw',
  height: 'auto',
  borderRadius: '10px',
}

class Edit extends React.Component {
    render() {
      return (
          <Default title="Edit Page">
            <div className='editPage' style={editPageStyle}>      
              <EditForm item={this.props.item}/>
            </div>
          </Default>
      );
    }
  }
  
  module.exports = Edit;