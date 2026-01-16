import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, tags, category } = book;
//   console.log(book);
  return (
    <Link to={`/books/${bookId}`}>
      <div className="">
        <div className="card bg-base-100 w-90 shadow-sm p-4">
          <figure className="bg-gray-600 rounded-xl">
            <img className="h-[166px] py-4" src={image} alt={bookName} />
          </figure>
          <div className="card-body">
            <div className="flex gap-2">
              {tags.map((tag, idx) => (
                <button key={idx} className="btn btn-xs bg-green-200 text-green-600">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>By: {author}</p>
            <div className="border-t-1 border-dashed"></div>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{category}</div>
              <div className="rating rating-lg flex items-center gap-1">
                5.00
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2"
                  aria-label="1 star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
