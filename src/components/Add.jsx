import React, { useState } from 'react'
import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap';
import { uploadRecipeAPI } from '../services/allApi';

const Add = ({setUploadRecipeResponse}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadRecipe({
      ...uploadRecipe, imageURL: "",
      title: "",
      ingredients: "",
      directions: "",
      youtubeLink: ""
    })
  }
  const handleShow = () => setShow(true);


  // api related
  const [uploadRecipe, setUploadRecipe] = useState({
    imageURL: "",
    title: "",
    ingredients: "",
    directions: "",
    youtubeLink: "",
  })

  // console.log(uploadRecipe); //goto formcontrol

  const getYoutubeLink = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      setUploadRecipe({ ...uploadRecipe, youtubeLink: `https://www.youtube.com/embed/${videoId}` })
    } else {
      setUploadRecipe({ ...uploadRecipe, youtubeLink: "" })
      alert("Input Proper Youtube Link!!!")
    }
  }

  const handleAdd = async () => {
    const { imageURL, title, ingredients, directions, youtubeLink } = uploadRecipe
    if (imageURL && title && ingredients && directions && youtubeLink) {
      const result = await uploadRecipeAPI(uploadRecipe)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert(`Recipe Details of '${result.data.title}' uploaded successfully`)
        setUploadRecipeResponse(result.data)
        handleClose()
      } else {
        alert("API Call Failed.... Please try after some time!")
      }
    } else {
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <div>
      <div className='text-center pt-5'>

        <Button onClick={handleShow} className='fs-4'><i className="fa-solid fa-plus pe-2"> </i> New Recipes</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>



            <FloatingLabel
              controlId="floatingInput"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control value={uploadRecipe.imageURL} onChange={e => setUploadRecipe({ ...uploadRecipe, imageURL: e.target.value })} type="text" placeholder="Image URL" />
            </FloatingLabel >



            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-3"
            >
              <Form.Control value={uploadRecipe.title} onChange={(e) => setUploadRecipe({ ...uploadRecipe, title: e.target.value })} type="text" placeholder="Title" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Ingredients"
              className="mb-3"
            >
              <Form.Control value={uploadRecipe.ingredients} onChange={e => setUploadRecipe({ ...uploadRecipe, ingredients: e.target.value })} as="textarea" placeholder="Ingredients" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Directions"
              className="mb-3"
            >
              <Form.Control value={uploadRecipe.directions} onChange={e => setUploadRecipe({ ...uploadRecipe, directions: e.target.value })} as="textarea" placeholder="Directions" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube Video Link"
            >
              <Form.Control value={uploadRecipe.youtubeLink} onChange={e => getYoutubeLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default Add