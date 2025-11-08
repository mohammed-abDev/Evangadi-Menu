import  { Component } from 'react';
import Header from './header/Header';
import FoodItem from './body/FoodItem';
import "../src/header/Header";
import "./commonResource/common.css";
import "./App.css";




 class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <Header />
          <FoodItem />
        </div>
      </>
    );
  }
}
export default App;

