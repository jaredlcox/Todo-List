// creating this todo using class-based componenets
// managing the state using class-based components
// managing state using functional components is a more modern practice by using React Hooks
// There's a class-based method called componentDidCatch that is not available in Hooks and actually requires setting state using class methods

class App extends React.Component {
  constructor(props) {
    super(props);
    // constructor(props) { super(props) is used for passing data from one component to another
    this.state = {
      newItem: "",
      list: []
    };
    // there can be as many properties in the this.state object as you like
    // every time the state of an object changes, React re-renders the component to the browser
    // right now the list is just an empty array with an empty string located in the array
    // when we update the state by addng newItem to the todo list, this.state will re-render with an updated list of text

  }

  updateInput(key, value) {
    // this.setState() is used to change the value of the state object
    // this is what is being put into the "Add an Item" input box
    // without this we wouldn't be able to add text to the input field

    this.setState({ [key]: value})
  }

  addItem() {
    // create a new item with unique id although Math.random could in theory generate the same random number which would not allow for a unique id to be generated
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    // look at the addItem function above and notice that these are the same. Used to copy the current list of items so that's why it's used for both delete and add
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  
  render() {
    return (
      <div>

      <h1 className="app-title">TODO LIST</h1>
        
        <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Add an Item...
          <br/>
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
          // this button is for the user to input text on the input
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i class="material-icons"> + </i>
          </button>
          <br /> <br />
          <ul>
            {/* this will take the current state of list and map over that */}
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {/* need to use key every item.id should be unique */}
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}



export default App;
