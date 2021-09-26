import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'
const Books = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const handleCart = (book) => {
        const newCart = [...cart, book]
        setCart(newCart)
    }
    return (
        <div className='books-container'>
            <div className='books-de'>
                <div className='grid'>
                    {
                        books.map(book => <Book

                            key={book.id}
                            book={book}
                            handleCart={handleCart}
                        ></Book>)
                    }
                </div>

            </div>
            <div className='books-cart'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Books;