import { useLoaderData } from "react-router-dom";
import { getReadBookList } from "../../utilities/LocalStorage";
import Book from "../Book/Book";
// import { useState } from "react";


const ReadBooks = () => {

    // const [books, setBooks] = useState();

    const readBooksList = getReadBookList();
    // console.log(readBooksList)
    const allBooks = useLoaderData()
    const readBooksData = allBooks.filter(book => readBooksList.includes(book.bookId))
    
    // console.log(readBooksData)
    return (
        <div>
            {
                readBooksData.map(bookData => <Book key={bookData.bookId} book={bookData}></Book>)
            }
        </div>
    );
};

export default ReadBooks;