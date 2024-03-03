import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { removeRecipeAPI, saveFavouriteAPI } from '../services/allApi';

const RecipeCard = ({ displayData, setRemoveRecipeResponse, insideFavourite }) => {


  const [lgShow, setLgShow] = useState(false);




  const handleShow = () => setLgShow(true);

  const [fav, setFav] = useState(false)

  const handlefavorite = async () => {
    setFav(true)
    const { imageURL, title, ingredients, directions, youtubeLink } = displayData
    await saveFavouriteAPI({ imageURL, title, ingredients, directions, youtubeLink })
    alert(`"${title}" is add to Favourite List`)
  }

  const deleteRecipe = async (rId) => {
    const result = await removeRecipeAPI(rId)
    setRemoveRecipeResponse(result.data)
  }

  return (
    <div>



      <Card style={{ width: '20rem' }}>
        <Card.Img style={{ width: '100%', height: '40vh' }} variant="top" src={displayData?.imageURL} />
        <Card.Body className='bg-light'>
          <Card.Title>{displayData?.title}</Card.Title>
        
          <div className='pt-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={() => handleShow(true)} type="button" className="btn btn-outline-secondary" fdprocessedid="1i3z66"><i className="fa-brands fa-youtube"></i></button>
            {!insideFavourite && <button onClick={() => handlefavorite(true)} type="button" className="btn btn-outline-success" fdprocessedid="osqslyt"><i className="fa-solid fa-heart "></i></button>
            }
            {!insideFavourite && <button onClick={() => deleteRecipe(displayData?.id)} type="button" className="btn btn-outline-danger" fdprocessedid="1i3z66"><i className="fa-solid fa-trash "></i></button>
            }

          </div>
        </Card.Body>
      </Card>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {displayData?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Text>
            <h5>Ingredients: </h5> {displayData?.ingredients}</Card.Text>
          <Card.Text>
            <h5>Directions:</h5>
            {displayData?.directions}
          </Card.Text>
          <iframe width="100%" height="400" src={`${displayData?.youtubeLink}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default RecipeCard