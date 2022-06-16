import bg_slide1 from "../assets/img/bg-slide1.jpg";
import bg_slide2 from "../assets/img/bg-slide2.jpg";
import bg_slide3 from "../assets/img/bg-slide3.jpg";

export function Slide() {
  return (
    <>
      <div className="max-w-screen-2xl h-full ml-auto mr-auto">
        <div
          id="carouselExampleIndicators"
          className="carousel slide relative h-full w-full ml-auto mr-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative h-full overflow-hidden">
            <div className="carousel-item active h-full float-left w-full">
              <img src={bg_slide1} className="block w-full h-full object-cover" alt="slide1" />
            </div>
            <div className="carousel-item h-full float-left w-full">
              <img src={bg_slide2} className="block w-full h-full object-cover" alt="slide2" />
            </div>
            <div className="carousel-item h-full float-left w-full">
              <img src={bg_slide3} className="block w-full h-full object-cover" alt="slide3" />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center w-16 p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center w-16 p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
    </>
  );
}
