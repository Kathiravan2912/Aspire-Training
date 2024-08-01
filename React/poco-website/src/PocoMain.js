import React, {Component } from 'react';
import { Link } from "react-router-dom";

export class PocoMain extends Component {
    
    render() {
        return (
            <div>
                <div className='Product-category'>
                        <ul className='product-options'>
                            <li><Link className="product-options-list" to='/Home/Products'>POCO-C-SERIES</Link></li>
                            <li><Link className="product-options-list"  to='/Home/Products'>POCO-M-SERIES</Link></li>
                            <li><Link className="product-options-list"  to='/Home/X_Series'>POCO-X-SERIES</Link></li>
                            <li><Link className="product-options-list"  to='/Home/Products'>POCO-F-SERIES</Link></li>
                            <li><Link className="product-options-list"  to='/Home/Products'>POCO-BUDGET</Link></li>
                            <li><Link className="product-options-list"  to='/Home/Products'>FOR-GAMERS</Link></li>
                            <li><Link className="product-options-list"  to='/Home/Products'>NEWLY-ARRIVED</Link></li>
                            <li><Link className="product-options-list"  to='/Home/Products'>COMING-UP!</Link></li>
                        </ul>
                    </div>
                <div className='tagLine'>
                        <h2>WHAT YOU NEED WHEN POCO IS HERE!!!</h2>
                        <h2>CHOOSE POCO, CHOOSE HAPPINESS...</h2>
                </div>
                <div className='end-line'></div>
                <div className='communication'>
                    <h4 className='follow'>FOLLOW US ON:
                        <ul className='icons'>
                        <li> <img src='./images/facebook.png' alt="facebook"/></li>
                        <li> <img src="./images/instagram.png" alt="instagram"/></li>
                        <li> <img src="./images/twitter.png" alt="twitter"/></li>
                        <li> <img src="./images/youtube.png" alt="youtube"/></li>
                        </ul>
                        </h4>
                </div>
                <div className='contactUs'>
                <h4 className='contact'>CONTACT US:</h4>
                <form>
                    Your Name:<br></br>
                    <input type='text'></input><br></br>
                    E-Mail:<br></br>
                    <input type='email'></input><br></br>
                    Queries:<br></br>
                    <textarea></textarea><br></br>
                    <button className='submit' type='submit'>SUBMIT</button>
                </form>
                </div>
            </div>
        )
    }
}

export default PocoMain






// import React, { useState, useEffect } from 'react';
// import './ImageSlide.css';

// const images = [
//     'images/slide1.jpg',
//     'images/slide2.jpg',
//     'images/slide3.jpg',
//     'images/slide4.jpg',
//     'images/slide5.jpg',
// ];

// const Slideshow = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="slideshow">
//             <img src={images[currentIndex]} alt={`slide ${currentIndex}`} className="slide-image" />
//         </div>
//     );
// };

// export default Slideshow;
