import React, {useState} from "react";
import menu from "./data";
import './App.css';
import Header from "./components/Header";
import MenuList from "./components/MenuList";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

const allCategories = ["all",...new Set(menu.map((item)=>item.category))]

function App() {
 
  const [data,setData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category)=>{
    if(category==="all"){
      setData(menu)
    }else{
      const newData = menu.filter((item) => category === item.category)
      setData(newData)
    } 
  }


  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar filterItems={filterItems} categories={categories}/>
        <Switch>
          <Route path="/">
            <MenuList data = {data}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
