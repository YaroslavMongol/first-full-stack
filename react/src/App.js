import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import TransactionsList from './Component/TransactionsList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddPage from './Component/AddPage';

function App() {
      return (
        <Router>
         <Header/> 
            <div className="App">
              <Switch>
                <Route path="/" exact component={TransactionsList}></Route>
                <Route path="/add" exact component={AddPage}></Route>
              </Switch>
            </div>
          <Footer/>  
        </Router>
      );
    }

export default App;
