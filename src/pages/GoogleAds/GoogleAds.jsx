import { Link } from 'react-router-dom';

export default function GoogleAds() {
    return (
        <div>
            <h2>Google Ads</h2>
            <p>Reach your target audience through Google Ads campaigns that drive traffic, leads, and conversions.</p>
            {/* Add more content specific to Google Ads */}
            <Link to='/services' className='btn btn-default' role='button'>Back to Services</Link>
        </div>
    );
}