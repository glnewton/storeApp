const React = require('react');

class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
        </head>
        <body>
            <header  id="header">
                <nav id="navBar">navBar</nav>
            </header>
            <main>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </main> 
        </body>
        <footer>
            Footer Stuff
        </footer>
      </html>
    );
  }
}

module.exports = Default;