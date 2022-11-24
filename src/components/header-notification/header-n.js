import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./header-n.css"

function HeaderNotification() {
    return (
        <div className='Container bg-cnt'>
            <Container>
                <a href="https://turo.com/us/en/search?country=US&defaultZoomLevel=11&delivery=false&endDate=11%2F29%2F2022&endTime=10%3A00&isMapSearch=false&itemsPerPage=200&latitude=40.7127753&location=New%20York%2C%20NY%2C%20USA&locationType=CITY&longitude=-74.0059728&pickupType=ALL&region=NY&sortType=RELEVANCE&startDate=11%2F26%2F2022&startTime=10%3A00&useDefaultMaximumDistance=true">
                    Turo has launched in New York! Tap to explore cars.
                </a>
            </Container>
        </div>
    );
}

export default HeaderNotification;