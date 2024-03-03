import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage = () => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/home')
    }

    return (
        <div>
            <div className='header row align-items-center justify-content-center'>
                <div className="col-lg-5 mt-5 " >
                    <h1 style={{ marginTop: "90px" }}> <span className='text-dark text-center mt-5' style={{ fontSize: "4vw" }}>The Easiest Way <br /> To Make Your <br />
                        Favorite Meal</span></h1>
                    <button onClick={handleNavigate} className='btn btn-info mt-3'>Explore Recipes</button>
                </div>

            </div>
            <div className='text-center py-5 my-5 bg-light'>
                <Container className='py-5'>
                    <Row>
                        <Col><h1 className='fw-bold text-start ps-5'>Explore All Health Food <br />Of the World with us</h1></Col>
                        <Col><p className='text-start pe-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum consequuntur provident veritatis? Fugit distinctio quaerat expedita repellat sunt reprehenderit impedit, rerum atque reiciendis inventore provident, ad, cumque placeat suscipit est.</p></Col>
                    </Row>

                </Container>
            </div>
            <div>
                <div className="logos">
                    <div className="logos-slide">
                        <img src="https://images.slurrp.com/prodarticles/b3rhx2ap4vf.webp" />
                        <img src="https://photos.smugmug.com/Asia/India/i-Pf4hCQr/0/d3d38770/X2/indian-food-dosa-X2.jpg" />
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*" />
                        <img src="https://deih43ym53wif.cloudfront.net/Golgappa-india-food-shutterstock_1422373154.jpg_9a7621c1bc.jpg" />
                        <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg" />

                        <img src="https://pipingpotcurry.com/wp-content/uploads/2023/05/Street-food-dabeli-recipe-Piping-Pot-Curry.jpg" />
                        <img src="https://faw-marketing.transforms.svdcdn.com/production/images/Chettinad-1.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1541501816&s=3119576ae6abf52dc8264337dd161019" />
                    </div>

                    <div className="logos-slide">
                        <img src="https://images.slurrp.com/prodarticles/b3rhx2ap4vf.webp" />
                        <img src="https://photos.smugmug.com/Asia/India/i-Pf4hCQr/0/d3d38770/X2/indian-food-dosa-X2.jpg" />
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*" />
                        <img src="https://deih43ym53wif.cloudfront.net/Golgappa-india-food-shutterstock_1422373154.jpg_9a7621c1bc.jpg" />
                        <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg" />

                        <img src="https://pipingpotcurry.com/wp-content/uploads/2023/05/Street-food-dabeli-recipe-Piping-Pot-Curry.jpg" />
                        <img src="https://faw-marketing.transforms.svdcdn.com/production/images/Chettinad-1.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1541501816&s=3119576ae6abf52dc8264337dd161019" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage