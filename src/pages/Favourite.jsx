import React, { useEffect } from 'react'
import { useState } from 'react';
import { getFavouriteAPI, removeFavouriteAPI } from '../services/allApi';
import RecipeCard from '../components/RecipeCard';

const Favourite = () => {

    const [lgShow, setLgShow] = useState(false);

    const [favrecipe, setFavrecipe] = useState([])

    const getFavouriteRecipes = async (rId) => {
        const result = await getFavouriteAPI(rId)
        if (result.status >= 200 && result.status < 300) {
            setFavrecipe(result.data)
            setLgShow()
        }
    }
    useEffect(() => {
        getFavouriteRecipes()
    }, [])


    const deleteFavourite = async (rId) => {
        await removeFavouriteAPI(rId)
        getFavouriteRecipes()

    }

    console.log(favrecipe);
    return (
        <>

            <h1 className='text-center pt-3'>Favourite Recipes</h1>

            <div className='container'>
                <div className="row mt-2">

                    <div className="col-lg-12 " >
                        {favrecipe.length > 0 ? favrecipe.map((item, index) => (
                            <div key={index}>
                                <div className="container-fluid mt-3 d-flex justify-content-between bg-light"  >
                                   <div className='row'>
                                       <div className='col-lg-4'>
                                            <div  className='pt-4 pb-3'>
                                                <RecipeCard insideFavourite={true} displayData={item} />
                                            </div>
                                       </div>
                                        <div className='col-lg-7'>
                                            <div className='pt-3'>
                                                <h5 className='fw-bold' style={{ justifyContent: 'flex-start' }}>Ingredients:</h5><span className='text-center'> {item.ingredients}</span>
                                                <h5 className='fw-bold pt-3'>Directions:</h5><span>{item.directions}</span>
                                            </div>
                                        </div>
                                        <div className='col-lg-1'>
                                        <button style={{ height: '50px', width: '50px',marginTop:'20px',marginRight:'30px' }} onClick={() => deleteFavourite(item.id)} type="button" className="btn btn-outline-danger" fdprocessedid="1i3z66"><i className="fa-solid fa-trash "></i></button>

                                        </div>
                                   </div>
                                </div>
                            </div>
                        ))
                            :
                            <div className='text-danger fw-bolder'>No Favourite Recipes </div>
                        }
                    </div>
                    <div className="col-lg-4 ">

                    </div>

                </div>
            </div>

        </>
    )
}

export default Favourite