const React = require('react');

const imgStyle = {
  height: '100px',
  widtth: 'auto'
}

const bodyStyle = {
  fontSize: '16px',
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
    fontSize: '20px',
    color: 'black',
    backgroundColor: '#AF929D',
    height: '5vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'fixed',
    top: '0'
};

const mainStyle = {
  //height: '90vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
  marginBottom: '10vh',
  // flexGrow: '1',
  // flexShrink: '0',
  // flexBasis: 'auto'
};

const footerStyle = {
    color: 'white',
    backgroundColor: '#4B5358',
    height: '5vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // position: 'sticky',
    bottom: '0',
    left: '0',
    right: '0',
     // flexGrow: '1',
  // flexShrink: '0',
  // flexBasis: 'auto'
};

class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" src='../styles/style.css'/>
        </head>
        <body style={bodyStyle}>
            <header style={headerStyle} id="header">
                <nav id="navBar">
                    <a href="/">Home</a> |
                    <a href="/items"> Inventory</a> |
                    <a href="/items/new"> Add New Item</a> |
                </nav>
            </header>
            <main style={mainStyle}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </main>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script> 
        </body>
        <footer style={footerStyle}>
            Footer Stuff
        </footer>
      </html>
    );
  }
}

module.exports = Default;