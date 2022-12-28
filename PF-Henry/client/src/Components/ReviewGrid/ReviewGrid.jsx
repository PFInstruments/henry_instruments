import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewGrid = ({ reviews }) => {

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="shadow-0 border" >
                    <div className="card-body p-4">
                        {reviews?.map((e) => {
                            return <ReviewCard
                                key={e.id}
                                image={e.image}
                                name={e.name}
                                score={e.score}
                                comment={e.comment}
                            />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewGrid