const React = require('react');

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <nav id="navBar">
                    <a href="/">Home</a> |
                    <a href="/items"> Shop </a> |
                    <a href="/items/new"> Add New Item</a> |
                    {/* <a href="#"> About</a> |
                    <a href="#"> Contact</a>
                    <a href="/items/seed"> Seed Inventory</a> */}
                </nav>
            </header>
        );
    }
}

module.exports = Header;