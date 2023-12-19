import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import RecipeCard from "../components/RecipeCard"
import { SearchForm } from "../components/SearchForm"

const Search = () => {
    let [recipes, setRecipes] = useState([])

    const [qs, setQs] = useSearchParams()
    const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=${qs.get('q')}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://low-carb-recipes.p.rapidapi.com/search',
        params: {
          name: qs.get('q'),
        },
        headers: {
          'X-RapidAPI-Key': '2ad0ddeaddmshf4ab521a6c12643p121b01jsn275b41560458',
          'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          setRecipes(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}, [qs]);

    return (
        <>
            <SearchForm />
            <main className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="heading">
                            <h3>RECIPES</h3>
                        </div>
                    </div>
                    <div className="recipes-container">
                        {
                            recipes.slice(0, 10).map(recipe => <RecipeCard recipe={recipe} />)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
export default Search