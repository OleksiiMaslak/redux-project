
import '../App.css';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
import { useGetRecipesQuery } from '../store/api/api';
import User from '../user/User';


function App() {
  const {isLoading, data} = useGetRecipesQuery();

  return (
    <section>
      {/* <User/> */}
      <Header/>
      <div className="App">
      {isLoading ? <div>Loading... </div> : data ? data.map(recipe => 
        <RecipeItem 
        key={recipe.id}
        recipe = {recipe}/>
        ) : <div>Not found</div>}
        
      </div>
    </section>
  );
}

export default App;
