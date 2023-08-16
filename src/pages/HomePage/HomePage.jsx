import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './HomePage.css';
import ResultsPage from '../ResultsPage/ResultsPage';
import AboutPage from '../AboutPage/AboutPage';
import GoogleAds from '../GoogleAds/GoogleAds';


export default function HomePage() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
    return (
        <main>
            <div className='jumbotron'>
                <h1>The Best Google Ads <br /> Agency In The Worlds</h1>
                <p>(With the data to prove it)</p>
                <ul className='buyingPoints' style={{ listStyleType: 'none' }}>
                    <li className='buyingPoints'>Google Premier Partners</li>
                    <li className='buyingPoints'>Creators of the One-to-One Method</li>
                    <li className='buyingPoints'>Top Rated Conversion Rate</li>
                </ul>
                <Link to='/services' className='btn btn-primary btn-lg'>
                    Find Out More!
                </Link>
            </div>
        <div className='content-container'>
            <div className="carousel">
                <Slider {...settings}>
                <div className='carousel-image'>
                    <img className="carousel-img" src="https://i.imgur.com/oVF7PIZ.jpeg" alt="Image 1" />
                </div>
                <div className='carousel-image'>
                    <img className="carousel-img" src="https://www.freepnglogos.com/uploads/walmart-logo-24.jpg" alt="Image 2" />
                </div>
                <div className='carousel-image'>
                    <img className="carousel-img" src="https://i.imgur.com/k9FMg61.png" alt="Image 3" 
                    style={{
                        marginTop:"7px"

                    }} />
                </div>
                <div className='carousel-image'>
                    <img src="https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo.png" alt="Image 4" />                
                </div>
                <div className='carousel-image'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/100/816/original/microsoft-logo-transparent-free-png.png" alt="Image 5" 
                    style={{
                        marginTop:"-7px"

                    }} />
                </div>
                <div className='carousel-image'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png" alt="Image 6"
                    style={{
                        maxWidth:"80%"

                    }}  />
                </div>
                <div className='carousel-image'>
                    <img src="https://i.imgur.com/rjVTrrb.png" alt="Image 7"
                    style={{
                        maxWidth:"130%",
                        marginLeft:"-7px"

                    }} />
                </div>
                <div className='carousel-image'>
                    <img src="https://i.imgur.com/2PZ5XVC.png" alt="Image 8"
                        style={{
                            marginTop:"10px"
                        }} />
                </div>
                <div className='carousel-image'>
                    <img src="https://i.imgur.com/HxsHnoJ.png" alt="Image 9"
                    style={{
                        maxWidth:"80%",
                    }}  />
                </div>
                <div className='carousel-image'>
                    <img src="https://i.imgur.com/3Sl3G9o.png" alt="Image 10"
                    style={{
                        marginTop:"7px"

                    }} />
                </div>
                <div className='carousel-image'>
                    <img src="https://i.imgur.com/70BFz5P.png" alt="Image 11" 
                    style={{
                        maxWidth:"120%",

                    }} />
                </div>
                <div className='carousel-image'>
                    <img src="https://i.imgur.com/upX4vMv.png" alt="Image 12" />
                </div>
                </Slider>
            </div>
        </div>

            <div className='row justify-content-center'>
                <div className='col-sm-6 col-md-3'>
                    <div className='thumbnail'>
                        <img src="https://static-00.iconduck.com/assets.00/google-ads-icon-2048x1837-4vbvpswm.png" alt="image" />
                        <div className='caption'>
                            <h3>Google Ads</h3>
                            <p>Reach your target audience through Google Ads campaigns
                                that drive traffic, leads, and conversions.
                            </p>
                            <p>
                                <Link to='/google-ads' className='btn btn-primary' role='button'>Details</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <div className='thumbnail'>
                        <img src="https://i.imgur.com/c5UXLQd.png" alt="image" />
                        <div className='caption'>
                            <h3>Facebook Ads</h3>
                            <p>Connect with potential customers on Facebook through strategic ad campaigns and audience targeting.</p>
                            <p>
                                <Link to='/results' className='btn btn-primary' role='button'>Details</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <div className='thumbnail'>
                        <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="image" />
                        <div className='caption'>
                            <h3>Instagram Ads</h3>
                            <p>Utilize Instagram's visual platform to showcase your products or services and engage with your audience.</p>
                            <div className='caption-buttons'>
                                <p>
                                    <Link to='/results' className='btn btn-primary' role='button'>Details</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutPage />
            <ResultsPage />
        </main>
    )
}
 