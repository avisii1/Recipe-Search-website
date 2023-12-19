import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleRecipe = () => {
    let [recipe, setRecipe] = useState({})
    const params = useParams()
    const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
  
    const url = `https://api.edamam.com/`;

    useEffect(() => {
        console.log("hello");
        console.log(params.id);
        const options = {
            method: 'GET',
            url: 'https://low-carb-recipes.p.rapidapi.com/recipes/'+params.id,
            headers: {
              'X-RapidAPI-Key': '2ad0ddeaddmshf4ab521a6c12643p121b01jsn275b41560458',
              'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setRecipe(response.data);
          }).catch(function (error) {
              console.error(error);
          });    
    }, [])
    return Object.keys(recipe).length > 0 ? <main className="row">
        
            
        {/* <h3>{recipe.name}</h3> */}

        
                    <img src={recipe.image} className="img-fluid rounded-2" style={{height: "200px"}} />
        
                        <h1 className="text-success display-5">{recipe.name}</h1>
        
                        <div className="col-12 text-secondary fst-italic my-3">
                            Cook Time: {recipe['cookTime']} min
                        </div>
                        

                        <div className="rec-desc-main">
                        <h4>Ingredients:</h4>
                         <div className="rec-desc">
                         {recipe.ingredients.map(item => {
                             return (<div className="desc-i"><span >{item.name}</span>, <span>{item.servingSize.qty}</span>, <span>{item.servingSize.grams}gm</span></div>)
                         })}</div>
                        </div>
                        

                        <h4>Steps:</h4>
                         <br />
                        <div className="rec-desc">
                        {recipe.steps.map(item => {
                            return (<ul ><li className="desc-i">{item}</li></ul>)
                        })}</div>
                        
                        
                        
    </main> : <></>
}
export default SingleRecipe