import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css'
import ResultsPage from '../ResultsPage/ResultsPage';
import ContactPage from '../ContactPage/ContactPage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';

export default function HomePage() {
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
            <div className="carousel-container">
                <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://static-00.iconduck.com/assets.00/google-ads-icon-2048x1837-4vbvpswm.png" alt="Image 1" />
                        </div>
                        <div className="col-md-3">
                            <img src="https://en.ryte.com/wiki/img_auth.php/2/20/FacebookAd.png" alt="Image 2" />
                        </div>
                        <div className="col-md-3">
                            <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="Image 3" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://static-00.iconduck.com/assets.00/google-ads-icon-2048x1837-4vbvpswm.png" alt="Image 1" />
                        </div>
                        <div className="col-md-3">
                            <img src="https://en.ryte.com/wiki/img_auth.php/2/20/FacebookAd.png" alt="Image 2" />
                        </div>
                        <div className="col-md-3">
                            <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="Image 3" />
                        </div>
                    </div>
                </Carousel>
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
                                <Link to='/results' className='btn btn-primary' role='button'>Button</Link>
                                <Link to='/services' className='btn btn-default' role='button'>Button 2</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <div className='thumbnail'>
                        <img src="https://en.ryte.com/wiki/img_auth.php/2/20/FacebookAd.png" alt="image" />
                        <div className='caption'>
                            <h3>Facebook Ads</h3>
                            <p>Connect with potential customers on Facebook through strategic ad campaigns and audience targeting.</p>
                            <p>
                                <Link to='/results' className='btn btn-primary' role='button'>Button</Link>
                                <Link to='/services' className='btn btn-default' role='button'>Button 2</Link>
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
                                    <Link to='/results' className='btn btn-primary' role='button'>Button</Link>
                                    <Link to='/services' className='btn btn-default' role='button'>Button 2</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUsPage />
            <ResultsPage />
            <ContactPage />
        </main>
    )
}