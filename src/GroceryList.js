import { Component } from "react";
import check from './check.jpg';

export class GroceryList extends Component {
state = {
    userInput: '',
    groceryList:[]
}

onChangeEvent(e) {
  this.setState({userInput:e});
}

addItem(input) {
    if (input==='') {
        alert ("Please enter an item")
    }
    else {
    let ListArray = this.state.groceryList;
    ListArray.push(input);
    this.setState({groceryList: ListArray, userInput: ''})
}
}
deleteItem(){
    let ListArray = this.state.groceryList;
    ListArray = [];
    this.setState({groceryList: ListArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return(
       <div>
        <form onSubmit={this.onFormSubmit}>
       <div className = "container">
            <input type="text" 
            placeholder="What to you want to buy today" 
            onChange={(e) =>{this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className = "container">
            <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="20px" alt="chek-box"/>
                    {item}
                    </li>
            ))}
           
        </ul>
        <div className = "container">
        <button onClick={() => this.deleteItem()} className="delete">Delete</button>
        </div>
        </form>
        </div>
    )
}
}
