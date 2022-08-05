import './App.css';
import React from "react"
import Recipes from "./Recipes"
import Details from "./Details"

function App() {
  const [summary, setSummary] = React.useState([])
  const [food, setFood] = React.useState("")
  const [isDetails, setIsDetails] = React.useState(false)
  const [currentRecipeIndex, setCurrentRecipeIndex] = React.useState(0)
  const [hasSearched, setHasSearched] = React.useState(false)
  const [searching, setSearching] = React.useState(false)
  
  function handleSubmit(e) {
    e.preventDefault()
    setSearching(true)

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '4450aa1a9emsha30afbd3a84392bp15df66jsncfef154d40be'
      }
    };
    
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes&q=${food}`, options)
      .then(response => response.json())
      .then(response => {
        setSummary(response.results)
        setHasSearched(true)
        setSearching(false) 
      })
      .catch(err => console.error(err))
  }

  function handleChange(e) {
    setFood(e.target.value)
  }

  function setDetails(recipeIndex) {
    setCurrentRecipeIndex(recipeIndex)
    setIsDetails(!isDetails)
    window.scrollTo(0, 0)
  }

  return (
    <div className="App">
      {!isDetails && <div className="front-page-top">
        <h1 className="title">Bon Recipe</h1>
        <div className="subtitle-form-container">
          <h4 className="subtitle">All of grandma's recipes in one convenient location</h4>
        </div>
      </div>}
      {!isDetails && <form onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Search an ingredient" value={food} onChange={handleChange}></input>
        <button className="submit-button">Submit</button>
      </form>}
      {!isDetails && <Recipes summary={summary} setDetails={setDetails} hasSearched={hasSearched} searching={searching}/>}
      {isDetails && <Details currentRecipe={summary[currentRecipeIndex]} setDetails={setDetails} />}
      <div className="footer">
        <p>Recipe information provided by <a href="https://rapidapi.com/apidojo/api/tasty">Tasty API</a> and icons provided by <a href="www.icons8.com">Icons 8</a>.</p>
      </div>
    </div>
  );
}

export default App;