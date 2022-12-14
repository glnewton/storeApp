const React = require('react');
const Default = require("./Default")

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

const itemCardStyle = {
    backgroundColor: '#25B5AF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '20px',
    border: '2px solid black'
}

const imgStyle = {
    width: '15vw',
    height: 'auto'
}

class Index extends React.Component {
  render() {
      //const { pokemon } = this.props;
      return (
            <Default title={"Store Items Index Page"}>
                <h2 style={myStyle}>See All The Items!</h2>
                <div>
                    {this.props.items.map((item, x) => {       
                            return (
                                <>
                                    <div className='itemCard' style={itemCardStyle}>      
                                            <p>{item.name.substring(0,1).toUpperCase() + item.name.substring(1)}</p><br/>
                                            <a href={`/items/${item.id}`}><img src={item.image} style={imgStyle}/></a><br/>                                                                              
                                            SKU: {item.sku}<br/>    
                                            Color: {item.color}<br/>
                                            Description: {item.description}<br/>
                                            Quantity: {item.quanity}<br/>
                                            Price: ${item.price}<br/>
                                            In Stock: {item.inStock}<br/>
                                            <button>
                                                <a href={``}>Buy</a>
                                            </button>
                                            <button>
                                                <a href={`/items/${item.id}/edit`}>Edit</a>
                                            </button>
                                            <form action={`/items/${item.id}?_method=DELETE`} method="POST">
                                                <input type="submit" value="DELETE"/>
                                            </form>
                                    </div>
                                </>
                            )
                        })
                    }
                    <br/>
                    <button>
                        <a href={`/items/new`}>Add New Item</a>
                    </button>
                </div>
            </Default>
      );
  }
}
module.exports = Index;
