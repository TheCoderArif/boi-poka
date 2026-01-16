import { useLoaderData } from "react-router-dom";
import { getWishBooksList } from "../../utilities/LocalStorage";
import Book from "../Book/Book";

const WishList = () => {
    const wishList = getWishBooksList()
    const allBooks = useLoaderData()
    const wishListData = allBooks.filter(book => wishList.includes(book.bookId))
    // console.log(wishListData);
    return (
        <div>
            {
                wishListData.map(data => <Book key={data.bookId} book={data}></Book>)
            }
        </div>
    );
};

export default WishList;