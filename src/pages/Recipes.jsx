import RecipeCard from "../components/RecipeCard"
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchForm } from "../components/SearchForm";
const Recipes=()=>{
  const [recipes, setrecipes] = useState([]);
  const [query, setquery] = useState("");
  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
      console.log("hello");
        var res = await axios.get(url);
        console.log(res.data.hits);
        setrecipes(res.data.hits);
        
    };
    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://low-carb-recipes.p.rapidapi.com/search',
            params: {
              name: 'cake',
            },
            headers: {
              'X-RapidAPI-Key': '2ad0ddeaddmshf4ab521a6c12643p121b01jsn275b41560458',
              'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setrecipes(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }, []);
    return (
        <>
            <SearchForm />
            <main className="recipes-container">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <h3>RECIPES</h3>
                        </div>
                    </div>
                    <div className="recipes-container">
                        {
                            recipes.slice(0, 15).map(recipe => <RecipeCard recipe={recipe} />)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
export default Recipes