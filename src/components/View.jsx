import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeCard from './RecipeCard';
import { getRecipeAPI } from '../services/allApi';


const View = ({ uploadRecipeResponse }) => {

  const [allRecipes, setAllRecipes] = useState()
  const [removeRecipeResponse, setRemoveRecipeResponse] = useState("")

  const getAllRecipe = async () => {
    const result = await getRecipeAPI()
    if (result.status == 200) {
      setAllRecipes(result?.data)
    }
  }

  useEffect(() => {
    getAllRecipe()
  }, [uploadRecipeResponse,removeRecipeResponse])

  console.log(allRecipes);

  return (
    <div>

      <Container>
        <Row>
          {allRecipes?.length > 0 ? allRecipes?.map((recipe, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="g-4">
              <RecipeCard displayData={recipe} setRemoveRecipeResponse={setRemoveRecipeResponse}/>
            </Col>
          ))
            :
            <div>No Recipes</div>
          }
        </Row>
      </Container>
    </div>
  )
}

export default View