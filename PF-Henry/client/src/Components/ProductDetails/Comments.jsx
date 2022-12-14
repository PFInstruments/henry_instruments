import React from "react";

export default function Comments({ score, comment }) {
  return (
    <div class="card">
      <div class="card-body text-muted">
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
