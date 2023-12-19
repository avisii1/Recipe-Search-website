import { useNavigate } from "react-router-dom"

const RecipeCard=({recipe})=>{
    const navigate = useNavigate()
    
    return (
        
        <div className="recipe-card rec" onClick={() => {navigate(`/recipes/${recipe.id}`)}}>
            <div className="recipe-image">
                <img src={recipe.image} />
            </div>
            <div className="recipe-title">
                <strong>{recipe.name}</strong>
            </div>
            {/* <div className="mc-box">
                Cook Time: {recipe.cookTime}
                </div> */}
        </div>
    )
}
export default RecipeCard