import { commonAPI } from "./commonApi"
import { SERVER_URL } from "./server_url"

export const uploadRecipeAPI = async (recipe) => {
   return await commonAPI("POST", `${SERVER_URL}/Recipes`, recipe)
}

export const getRecipeAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/Recipes`,"")
}

export const saveFavouriteAPI=async(recipeDetails)=>{
return await commonAPI("POST",`${SERVER_URL}/favourite`,recipeDetails)
}

export const getFavouriteAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/favourite`,"")
}

export const removeFavouriteAPI=async(recipeId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/favourite/${recipeId}`,{})
}

export const removeRecipeAPI=async(recipeId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/Recipes/${recipeId}`,{})
}