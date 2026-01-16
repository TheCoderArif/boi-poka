import { useLoaderData, useParams } from "react-router-dom";
import { setDataToLS } from "../../utilities/utilities";
import { setWishList } from "../../utilities/wishList";
import { setReadBookList, setWishBooksList } from "../../utilities/LocalStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === id);
  // console.log(book);
  const {author, bookId: currentBookId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing} = book;

  const handleRead = (id) => {
    setDataToLS(id)
    setReadBookList(id)
    toast('Added to Read List')
  }

  const handleWishList = id => {
    setWishList(id)
    setWishBooksList(id)
    toast('Added to wish List')
  }
    return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <p>By : {author}</p>
            <p className="border-t-1 border-dashed my-2"></p>
            <h4>{category}</h4>
            <p className="border-t-1 border-dashed my-2"></p>
            <p><span className="font-bold">Review : </span>{review}</p>
            <p className="border-t-1 border-dashed my-2"></p>
            <p><span className="font-bold">Tag</span> {
                tags.map((tag, i) => <span className="px-2 text-green-500" key={i}>#{tag}</span>)
            }</p>
            <p className="border-t-1 border-dashed my-2"></p>
            <table className="">
                <tr >
                    <td className="pr-7">
                        <p className="text-gray-400">Number of Pages:</p>
                        <p className="text-gray-400">Publisher:</p>
                        <p className="text-gray-400">Year of Publishing:</p>
                        <p className="text-gray-400">Rating:</p>
                    </td>
                    <td  className="">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </td>
                </tr>
            </table>
            {/* <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
            <button onClick={() => handleRead(currentBookId)} className=" mt-2 btn btn-soft mr-3">Read</button>

            <button onClick={()=>handleWishList(currentBookId)} className=" mt-2 btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
