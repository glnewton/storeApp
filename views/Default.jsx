const React = require('react');

const imgStyle = {
  height: '100px',
  widtth: 'auto'
}

const bodyStyle = {
  backgroundColor: '#727072',
  height: '100vh',
  width: '100vw',
  margin: '0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}

const headerStyle = {
    color: 'black',
    backgroundColor: '#AF929D',
    height: '5vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
};

const mainStyle = {
  height: '90vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center'
};

const footerStyle = {
    color: 'white',
    backgroundColor: '#4B5358',
    height: '5vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
};



class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" src='../public/style.css'/>
        </head>
        <body style={bodyStyle}>
            <header style={headerStyle} id="header">
                <nav id="navBar">
                    <a href="/">Home</a> |
                    <a href="/items">Inventory</a> |
                    <a href="/items/new">Add New Item</a> |
                </nav>
            </header>
            <main style={mainStyle}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </main> 
        </body>
        <footer style={footerStyle}>
            Footer Stuff
        </footer>
      </html>
    );
  }
}

module.exports = Default;