const React = require('react');

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <nav id="navBar">
                    <a href="/">Home</a> |
                    <a href="/items"> Inventory</a> |
                    <a href="/items/new"> Add New Item</a> |
                    {/* <a href="/items/seed"> Seed Inventory</a> */}
                </nav>
            </header>
        );
    }
}

module.exports = Header;