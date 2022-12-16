import React from "react";

export default function Comments({ score, comment }) {
  return (
    <div className="card">
      <div className="card-body text-muted">
        Rating: {score}
        <p />
        {comment}
      </div>
    </div>

    /*
    <div className="card">
      <h5 className="text-muted">Comentario : {comment}</h5>
      <h5 className="text-muted">Rating: {score}</h5>
    </div>*/
  );
}
