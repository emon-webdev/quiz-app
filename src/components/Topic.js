import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="py-9">
      <div class="card w-96 rounded-md bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div class="card-body flex-row justify-between">
          <h2 class="card-title">{name} Quiz: <span className="text-blue-600">{total}</span></h2>
          <div class="card-actions">
            <Link to={`/topic/${id}`} class="btn btn-primary">Start Quiz</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
