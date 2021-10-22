import React from "react"
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Head/header'
import Pages from './Components/Pages/page'
import {DataProvider} from './GlobalState'
import ReactNotification from 'react-notifications-component'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <Header />
          <ReactNotification />
          <Pages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
