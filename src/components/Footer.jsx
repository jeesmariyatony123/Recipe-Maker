import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div style={{ height: '300px' }} className=' pt-5 mt-5 w-100 bg-info text-center ' >
                <div className="container footer-content d-flex justify-content-around pt-5">
                    <div style={{ width: '400px' }} >
                        <h5 className='d-flex syne-tactile-regular fs-1'>Recipe Maker</h5>

                    </div>

                    <div className='me-2'>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='px-5 fs-4'>Home</Link>
                        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} className='px-5 fs-4'>Recipes</Link>
                        <Link to={'/favorite'} style={{ textDecoration: 'none', color: 'white' }} className='px-5 me-5 fs-4'>Favourite</Link>
                        
                    </div>
                    <div className="contact ms-5 ">
                        <h5 className='pb-3'>Contact Us</h5>
                        <div className="d-flex">
                            <input type="text" className="form-control me-1" placeholder='Email' />
                        </div>
                        <div className="icons d-flex justify-content-between mt-3">
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-twitter fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-instagram fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-facebook fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-linkedin fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-github fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-solid fa-phone fa-1x"></i></a>

                        </div>
                    </div>
                  
                    

                </div>
            </div>
        </>

    )
}

export default Footer