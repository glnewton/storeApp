const React = require("react");
const Default = require("./Default.jsx");

class New extends React.Component {
  render() {
    return (
      <Default title="Home Page">
        <div className="banner">
          <img
            src="https://c8.alamy.com/comp/2C94609/online-shopping-web-banner-template-design-flat-design-style-online-shopping-web-banner-vector-illustration-design-2C94609.jpg"
            alt="banner image"
          />
        </div>
        <div className="homePage container">
          <h2>Welcome!</h2>
          <p>
            Welcome to our online shop! We are delighted to offer you a wide
            range of products at great prices. Whether you're looking for the
            latest gadgets, stylish clothing, or everyday essentials, you'll
            find everything you need right here. We are dedicated to providing
            you with the best shopping experience possible, and we are always
            happy to help with any questions you may have. Thank you for
            choosing us for all of your shopping needs. Happy browsing!
          </p>
        </div>
      </Default>
    );
  }
}

module.exports = New;
