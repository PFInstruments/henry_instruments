import React, { useCallback, useMemo, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
const reviewsPerSegment = 5;

const ReviewGrid = ({ reviews }) => {
  const [reviewsCursor, setReviewsCursor] = useState(1);
  const segmentedReviews = useMemo(
    () => reviews.slice(0, reviewsCursor * reviewsPerSegment),
    [reviews, reviewsCursor]
  );
  const isRemainingReviews = useMemo(
    () => reviews.length > reviewsCursor * reviewsPerSegment,
    [reviews.length, reviewsCursor]
  );
  const handleReadMore = useCallback(() => {
    if (isRemainingReviews) setReviewsCursor((old) => ++old);
  }, [isRemainingReviews]);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="shadow-0 border-invisible">
          <div className="card-body p-4">
            {segmentedReviews?.map((e) => {
              return (
                <React.Fragment key={e.id}>
                  <ReviewCard
                    key={e.id}
                    user_id={e.user_id}
                    image={e.image}
                    name={e.name}
                    score={e.score}
                    comment={e.comment}
                  />
                </React.Fragment>
              );
            })}
            {isRemainingReviews && (
              <span
                className="text-info"
                style={{ userSelect: "none", cursor: "pointer" }}
                onClick={handleReadMore}
              >
                Leer mas...
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewGrid;
