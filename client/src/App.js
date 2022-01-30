import {Router, navigate} from '@reach/router';
import React, {useState} from 'react';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import OneAuthor from './components/OneAuthor';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [authors, setAuthors] = useState([]);

  return (
    <div className="App">
      <Router>
        <AllAuthors path = '/' authors= {authors} setAuthors = {setAuthors} />
        <CreateAuthor path = "/new" authors= {authors} setAuthors = {setAuthors}/>
        <OneAuthor path = "/authors/:id"/>
        <Edit path ="/authors/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
