const Carousel = () => {
    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://therockstore.com.ar/wp-content/uploads/elementor/thumbs/PREMOND1280x385-1-pwgfqih0u3fmcoo3iugk7zm900sckhvgrqe3pghma2.jpg"
                        className="d-block w-100"
                        width="200"
                        height="400"
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/10633-Bajaao_640x320_Banner.jpg"
                        className="d-block w-100"
                        alt="Guitarra"
                        width="200"
                        height="400"
                    />
                    <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                    <img
                        src="Slides/teclado.jpg"
                        className="d-block w-100"
                        width="200"
                        height="400"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block"></div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
