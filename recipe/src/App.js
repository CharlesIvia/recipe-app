import React, {useState, useEffect} from 'react';
import './App.css';

const App = ()=> {
  const APP_ID = "a9e37851";

  const APP_KEY = "a388d48a5936ba2b36690638939a4f0f	";

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    getRecipes();
  }, []);

  const getRecipes = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    
    console.log(data);
    setRecipes(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
