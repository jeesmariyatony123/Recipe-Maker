import React, { useState } from 'react'
import View from '../components/View'
import Add from '../components/Add';

const Home = () => {

  const [uploadRecipeResponse,setUploadRecipeResponse]=useState("")
  return (

    <>
      <img width={'100%'} height={'400px'} style={{ marginTop: "-16px" }} src="https://www.realsimple.com/thmb/B1-CNe-4FHWSUK-3CCgAi3lxFXc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cooking-school-banner-2-2000-589a2b6f789d405f9796b18a7f3639cc.jpg" alt="" />
       <Add setUploadRecipeResponse={setUploadRecipeResponse}/>

      <div className="container-fluid mt-5 mb-5 row">
        <div className="col-lg-12">
          <View uploadRecipeResponse={uploadRecipeResponse}/>
        </div>
      
      </div>
    </>
  )
}

export default Home