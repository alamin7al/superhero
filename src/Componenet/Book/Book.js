import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Book.css'
const Book = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { name, id, img, price, writer } = props.book
    return (
        <div className='card-container'>


            <div className='card'>
                <img className='image' src={img} alt="" />
                <div className='container'>
                    <h4>book name: {name} </h4>
                    <p>Book id: {id} </p>
                    <p>writter: {writer} </p>
                    <p>price:${price} </p>
                    <button onClick={()=>props.handleCart(props.book)} className='btn'>{element} add to cart</button>
                    <br />
                    <div className='icon'>
                    <i class="fab fa-facebook-f fa-2x"></i>
                    <i class="fab fa-instagram fa-2x"></i>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default Book;