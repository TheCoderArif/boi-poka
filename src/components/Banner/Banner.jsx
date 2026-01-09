import bookBanner from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookBanner}
          className="max-w-sm rounded-lg shadow-2xl "
        />
        <div className='p-3'>
          <h1 className="text-4xl font-bold pb-3">Books to freshen up <br /> your bookself.</h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          <button className="btn btn-primary ">View the list</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;