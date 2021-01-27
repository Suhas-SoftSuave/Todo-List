import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: null,
      arr: [], // [{}]
      name: "",
      inputname: "",
      id: "edit",
      editedIndex: -1,
      editedElement: "",
    };
  }

  currenDelete = (index, event) => {
    console.log(index, event);
    const array = this.state.arr;
    array.splice(index, 1);
    this.setState({ arr: array });
  };

  listItems = () => {
    return this.state.arr.map((arrelement, index) => (
      <div className="listItems">
        <div className="felx-container">
          <div className="thisTxt">
            {this.state.editedIndex === index ? (
              <input
                type="text"
                value={this.state.editedElement}
                onChange={this.handleInput}
              />
            ) : (
              <p id={this.state.id + index}>{arrelement} </p>
            )}
          </div>
          <div className="listbuttons">
            <button type="button" onClick={(e) => this.currenDelete(index, e)}>
              Delete
            </button>
            <button
              type="button"
              onClick={(event) => this.toEdit(event, index, arrelement)}
              id="editbutton"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={(e) => this.doneEdit(e, index, arrelement)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    ));
  };

  handleInput = (event) => {
    this.setState({ editedElement: event.target.value });
  };

  doneEdit = (event, index, arrayElement) => {
    //  const edit = document.getElementById(this.state.id + index);
    //  console.log(edit);
    //  edit.contentEditable = false;
    //  edit.style.backgroundColor = "White";

    const editname = this.state.editedElement;
    const newarr = this.state.arr;
    if (editname === "") {
      alert("value should not be empty");
    } else {
      newarr[index] = editname;
      this.setState({ arr: newarr });
      this.setState({ editedIndex: -1 });
    }
  };

  toEdit = (event, index, arrayElement) => {
    // const edit = document.getElementById(this.state.id + index);
    // edit.contentEditable = true;
    // edit.style.backgroundColor = "#80b3ff";
    // console.log(this.state.id + index);
    this.setState({ editedElement: arrayElement });
    this.setState({ editedIndex: index });
  };

  toAdd = () => {
    if (this.state.name.trim() === "") {
      alert("input should not be empty");
    } else {
      let textname = this.state.name;
      this.setState({ arr: [...this.state.arr, textname] });
      console.log(this.state.arr);
      this.setState({ name: "" });
    }
  };

  toDelete = () => {
    const array = this.state.arr;
    array.splice(0);
    this.setState({ arr: array });
    this.setState({ name: "" });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="header-name">
          <h1>Todo-list</h1>
        </div>
        <div className="app-new">
          <div className="list">
            <label>
              Name:
              <input
                type="text"
                id="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <button onClick={this.toAdd}>Add</button>
            <button onClick={this.toDelete}>Clear</button>
            {this.listItems()}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
