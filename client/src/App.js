import React  from "react";
import {Switch,Route,Redirect} from 'react-router-dom'
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart"



function App() {
    return (
        <>
         <Header/>
         <Switch>
            <Route exact path="/" component ={()=> <Main/>}/>
            <Route exact path="/cart" component ={()=> <Cart/>}/>
            <Redirect to="/"/>
         </Switch>
      </>

  )
}

export default App;
