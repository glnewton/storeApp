const React = require('react');
const Default = require("./Default")

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
      //const { pokemon } = this.props;
      return (
            <Default title={"Store Items Index Page"}>
                <h1 style={myStyle}>See All The Items!</h1>
                <ul>
                    {this.props.items.map((item, x) => {       
                            return (
                                <>
                                    <li>
                                        <a href={`/items/${item.id}`}>{item.name.substring(0,1).toUpperCase() + item.name.substring(1)}</a>
                                    </li>
                                    <a href={`/items/${item.id}/edit`}>Edit</a>
                                    <form action={`/items/${item.id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                </>
                            )
                        })
                    }
                </ul>
            </Default>
      );
  }
}
module.exports = Index;
