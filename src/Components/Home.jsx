import Blob from '../assets/blob.svg';
import Alex from '../assets/alex2.jpg';

import "../Home.css"

const Home = () => {
    return (
        <section className="alex">
            
            <div className="image-container">
                <img src={Alex} className="alex" alt="A photo of Alex, the web developer!" />
                <img src={Blob} className='blob' alt="a Blob pattern" />
            </div>
            <div className="content">
                <p>Hello, I am</p>
                <h1><span>Alex Rodgers</span></h1>
                <p>A <span>Front-End Web Developer</span></p>

            </div>
        </section>
    )
}

export default Home;