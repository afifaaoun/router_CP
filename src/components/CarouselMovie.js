import React from 'react'

const CarouselMovie = () => {
  return (
<div className="container text-center my-3">
    <h2 className="font-weight-light">List of films</h2>
    <div className="row mx-auto my-auto">
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner w-100" role="listbox">
                <div className="carousel-item active">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src="http://placehold.it/380?text=1" alt='im'/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src="http://placehold.it/380?text=2"alt='im'/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src="http://placehold.it/380?text=3"alt='im'/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src="http://placehold.it/380?text=4"alt='im'/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src="http://placehold.it/380?text=5"alt='im'/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src="http://placehold.it/380?text=6"alt='im'/>
                        </div>
                    </div>
                </div>
            </div>



            <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    <h5 className="mt-2">Advances one slide at a time</h5>
</div>
  )
}

export default CarouselMovie
