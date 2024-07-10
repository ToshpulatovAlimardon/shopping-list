import { Component } from "react";
import Filter from "./filter";
import Information from "./information";
import ShoppingAddForm from "./shopping-add-form";
import ShoppingList from "./shopping-list";
import { arr } from "../constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: arr,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <div className="wrapper">
          <div className="card">
            <Information />

            <ShoppingAddForm />

            <ShoppingList data={data} />
            <Filter />
          </div>
          <img src="/earth.svg" alt="" />
        </div>
      </div>
    );
  }
}

export default App;
