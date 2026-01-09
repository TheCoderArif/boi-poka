import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);

    return (
        <div>
            <p className="text-2xl font-bold text-center">Books: {books.length}</p>
            <div>
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
                
            </div>
        </div>
    );
};

export default Books;